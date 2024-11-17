import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ ok: 'true', env: process.env.NODE_ENV });
}

export async function POST(request: NextRequest) {
    const json = await request.formData();

    const data = {
        citation: json.get('citation'),
        author: json.get('author'),
    };

    return NextResponse.json({ ok: 'true', data });
}
