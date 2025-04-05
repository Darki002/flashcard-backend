import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const {pid} = req.query;

    const deck = await prisma.deck.findUnique({
        where: {id: Number(pid)},
        include: {cards: true},
    });
    if (deck) {
        return res.json(deck);
    } else {
        return res.status(404).json({error: 'Deck not found'});
    }
}