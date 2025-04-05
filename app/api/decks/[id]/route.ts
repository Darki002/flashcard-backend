import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Find the deck by its id and include its cards
        const deck = await prisma.deck.findUnique({
            where: { id: Number(params.id) },
            include: { cards: true },
        });

        // If no deck is found, return a 404 response.
        if (!deck) {
            return NextResponse.json({ error: 'Deck not found' }, { status: 404 });
        }

        // Return the deck data as JSON.
        return NextResponse.json(deck, { status: 200 });
    } catch (error) {
        console.error('Error fetching deck:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}