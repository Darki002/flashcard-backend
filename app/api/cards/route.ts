import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (id) {
    // Get card by ID
    const card = await prisma.card.findUnique({
      where: { id: Number(id) },
    });
    if (card) {
      return NextResponse.json(card);
    } else {
      return NextResponse.json({ error: 'Card not found' }, { status: 404 });
    }
  }
  // Get all cards
  const cards = await prisma.card.findMany();
  return NextResponse.json(cards);
}

export async function POST(req: NextRequest) {
  // Create a new card
  const { front, back, deckId } = await req.json();
  const newCard = await prisma.card.create({
    data: { front, back, deckId },
  });
  return NextResponse.json(newCard, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  // Delete a card
  const { id } = await req.json();
  await prisma.card.delete({
    where: { id },
  });
  return new NextResponse(null, { status: 204 });
}

export async function PUT(req: NextRequest) {
  // Update a card
  const { id, front, back, deckId } = await req.json();
  const updatedCard = await prisma.card.update({
    where: { id },
    data: { front, back, deckId },
  });
  return NextResponse.json(updatedCard);
}
