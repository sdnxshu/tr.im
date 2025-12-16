import {
    pgTable,
    uuid,
    text,
    varchar,
    timestamp,
    boolean,
    index,
} from "drizzle-orm/pg-core";

const urls = pgTable(
    "urls",
    {
        id: uuid("id").defaultRandom().primaryKey(),

        shortCode: varchar("short_code", { length: 6 }).notNull().unique(),

        originalUrl: text("original_url").notNull(),

        isActive: boolean("is_active").default(true).notNull(),

        expiresAt: timestamp("expires_at", { withTimezone: true }),

        createdAt: timestamp("created_at", { withTimezone: true })
            .defaultNow()
            .notNull(),
    },
    (table) => [
        index("urls_shortcode_idx").on(table.shortCode),
    ]
);

export { urls };
