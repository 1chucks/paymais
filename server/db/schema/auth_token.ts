import { integer, pgTable, text } from "drizzle-orm/pg-core";

import { usersSchema } from "./user";
import { baseProperties } from "./utils";

export const authTokenSchema = pgTable("auth_token", {
	refreshToken: text("refreshToken").notNull(),
	userId: integer("user_id")
		.notNull()
		.references(() => usersSchema.id),
	...baseProperties,
});
