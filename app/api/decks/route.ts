import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  // Get all decks
  const decks = await prisma.deck.findMany({
    include: { cards: true },
  });
  return NextResponse.json(decks);
}

export async function POST(req: NextRequest) {
  // Create a new deck
  const { name } = await req.json();
  const newDeck = await prisma.deck.create({
    data: { name },
  });
  return NextResponse.json(newDeck, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  // Delete a deck
  const { id } = await req.json();
  await prisma.deck.delete({
    where: { id },
  });
  return NextResponse.json(null, { status: 204 });
}

export async function PUT(req: NextRequest) {
  // Update a deck
  const { id, name } = await req.json();
  const updatedDeck = await prisma.deck.update({
    where: { id },
    data: { name },
  });
  return NextResponse.json(updatedDeck);
}
