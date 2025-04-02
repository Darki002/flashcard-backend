import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    const { deckId, cardId } = req.query;
    // You can validate deckId if needed; here we focus on cardId operations.
    const parsedCardId = parseInt(cardId);

    if (req.method === 'PUT') {
        const { front, back } = req.body;
        try {
            const updatedCard = await prisma.card.update({
                where: { id: parsedCardId },
                data: { front, back },
            });
            return res.status(200).json(updatedCard);
        } catch (error) {
            return res.status(500).json({ error: 'Error updating card' });
        }
    } else if (req.method === 'DELETE') {
        try {
            await prisma.card.delete({
                where: { id: parsedCardId },
            });
            return res.status(200).json({ message: 'Card deleted' });
        } catch (error) {
            return res.status(500).json({ error: 'Error deleting card' });
        }
    } else {
        res.setHeader('Allow', ['PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
