import { serial, timestamp } from "drizzle-orm/pg-core";

export const baseProperties = {
	id: serial("id").primaryKey(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
};
