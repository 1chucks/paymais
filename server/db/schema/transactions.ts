import { pgTable, text } from "drizzle-orm/pg-core"

import { baseProperties } from "./utils"

export const transactionsSchema = pgTable("transactions", {
  transaction_type: text("transaction_type").notNull(),
  amount: text("amount").notNull(),
  from: text("from").notNull(),
  date: text("date").notNull(),
  ...baseProperties,
})
