import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        // Get deck by ID
        const deck = await prisma.deck.findUnique({
            where: {id: Number(id)},
            include: {cards: true},
        });
        if (deck) {
            return NextResponse.json(deck);
        } else {
            return NextResponse.json({error: 'Deck not found'}, {status: 404});
        }
    }
    // Get all decks
    const decks = await prisma.deck.findMany({
        include: {cards: true},
    });
    return NextResponse.json(decks);
}

export async function POST(req: NextRequest) {
    // Create a new deck
    const {name} = await req.json();
    const newDeck = await prisma.deck.create({
        data: {name},
    });
    return NextResponse.json(newDeck, {status: 201});
}

export async function DELETE(req: NextRequest) {
    // Delete a deck
    const {id} = await req.json();
    await prisma.deck.delete({
        where: {id},
    });
    return new NextResponse(null, {status: 204});
}

export async function PUT(req: NextRequest) {
    // Update a deck
    const {id, name} = await req.json();
    const updatedDeck = await prisma.deck.update({
        where: {id},
        data: {name},
    });
    return NextResponse.json(updatedDeck);
}
