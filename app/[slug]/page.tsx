import React from 'react'
import { redirect } from "next/navigation";

import { eq } from "drizzle-orm";

import { urls } from "@/db/schema";

import { redis } from "@/lib/redis";
import { db } from "@/lib/db";

// Cache key prefix
const CACHE_PREFIX = "short:";

const Page = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug: shortCode } = await params

    // 1️⃣ Check Redis cache first
    const cachedUrl = await redis.get(CACHE_PREFIX + shortCode);
    if (cachedUrl) {
        // Redirect immediately if cached
        redirect(cachedUrl);
    }

    // 2️⃣ Fetch from DB if cache miss
    const [url] = await db
        .select({
            originalUrl: urls.originalUrl,
            isActive: urls.isActive,
            expiresAt: urls.expiresAt
        })
        .from(urls)
        .where(eq(urls.shortCode, shortCode));

    if (!url || !url.isActive || (url.expiresAt && url.expiresAt < new Date())) {
        // Not found or expired → show 404
        return <h1>404 - Link Not Found or Expired</h1>;
    }

    // 3️⃣ Save in Redis (cache-aside)
    // Set TTL to expire cache automatically (e.g., 24h)
    await redis.set(CACHE_PREFIX + shortCode, url.originalUrl, "EX", 24 * 60 * 60);

    // 4️⃣ Redirect
    redirect(url.originalUrl);
}

export default Page