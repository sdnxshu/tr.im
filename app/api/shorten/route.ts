import { NextResponse } from "next/server";

import { urls } from "@/db/schema";
import { db } from "@/lib/db";

function generateShortCode(length = 6): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

export async function POST(request: Request) {

    try {

        const { url } = await request.json();
        if (!url) {
            return NextResponse.json(
                { error: "url is required" },
                { status: 400 }
            );
        }

        const shortCode = generateShortCode(6);

        const [inserted] = await db.insert(urls).values({
            originalUrl: url,
            shortCode,
        }).returning();

        const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${shortCode}`;

        return NextResponse.json({ shortUrl, shortCode, id: inserted.id });

    } catch (err) {

        console.error(err);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );

    }

}