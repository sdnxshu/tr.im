import Redis from "ioredis";

export const redis = new Redis(process.env.REDIS_URL!); 
// Example: redis://localhost:6379
