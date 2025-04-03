import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    const { id } = req.query;
    const deckId = parseInt(id);

    if (req.method === 'GET') {
        try {
            const deck = await prisma.deck.findUnique({
                where: { id: deckId },
                include: { cards: true },
            });
            if (!deck) return res.status(404).json({ error: 'Deck not found' });
            return res.status(200).json(deck);
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching deck' });
        }
    } else if (req.method === 'PUT') {
        const { name, cards } = req.body;
        try {
            // Update the deck name
            await prisma.deck.update({
                where: { id: deckId },
                data: { name },
            });

            // If new cards are provided, replace the existing cards
            if (cards && Array.isArray(cards)) {
                // Delete existing cards for this deck
                await prisma.card.deleteMany({ where: { deckId } });
                // Create new cards
                await Promise.all(
                    cards.map((card) =>
                        prisma.card.create({
                            data: {
                                front: card.front,
                                back: card.back,
                                deckId,
                            },
                        })
                    )
                );
            }
            const updatedDeck = await prisma.deck.findUnique({
                where: { id: deckId },
                include: { cards: true },
            });
            return res.status(200).json(updatedDeck);
        } catch (error) {
            return res.status(500).json({ error: 'Error updating deck' });
        }
    } else if (req.method === 'DELETE') {
        try {
            await prisma.deck.delete({ where: { id: deckId } });
            return res.status(200).json({ message: 'Deck deleted' });
        } catch (error) {
            return res.status(500).json({ error: 'Error deleting deck' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
