import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ ok: 'true', env: process.env.NODE_ENV });
}

export async function POST(request: NextRequest) {
    const formData = await request.formData();

    const newCitation = await prisma.citation.create({
        data: {
            author: String(formData.get('author')),
            text: String(formData.get('citation')),
        },
    });

    return NextResponse.json({ citation: newCitation });
}
