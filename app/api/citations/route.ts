import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ ok: 'true', env: process.env.NODE_ENV });
}

export async function POST(request: NextRequest) {
    const json = await request.json();

    // simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newCitation = await prisma.citation.create({
        data: {
            author: json.author,
            text: json.citation,
        },
    });

    return NextResponse.json({ citation: newCitation });
}
