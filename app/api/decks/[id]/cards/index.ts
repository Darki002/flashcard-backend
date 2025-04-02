import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    const { deckId } = req.query;
    const parsedDeckId = parseInt(deckId);

    if (req.method === 'POST') {
        const { front, back } = req.body;
        try {
            // Ensure the deck exists
            const deck = await prisma.deck.findUnique({
                where: { id: parsedDeckId },
            });
            if (!deck) return res.status(404).json({ error: 'Deck not found' });

            const card = await prisma.card.create({
                data: {
                    front,
                    back,
                    deckId: parsedDeckId,
                },
            });
            return res.status(201).json(card);
        } catch (error) {
            return res.status(500).json({ error: 'Error adding card' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
