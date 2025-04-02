import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        try {
            const decks = await prisma.deck.findMany({ include: { cards: true } });
            return res.status(200).json(decks);
        } catch (error) {
            return res.status(500).json({ error: 'Error fetching decks' });
        }
    } else if (req.method === 'POST') {
        const { name, cards } = req.body;
        try {
            const deck = await prisma.deck.create({
                data: {
                    name,
                    cards: cards && Array.isArray(cards) ? { create: cards } : undefined,
                },
                include: { cards: true },
            });
            return res.status(201).json(deck);
        } catch (error) {
            return res.status(500).json({ error: 'Error creating deck' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
