import { integer, pgTable, text } from "drizzle-orm/pg-core"

import { baseProperties } from "./utils"

export const usersSchema = pgTable("users", {
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  bvn: integer("bvn").notNull(),
  first_name: text("first_name"),
  last_name: text("last_name"),
  email: text("email"),
  country: text("country"),
  state: text("state"),
  lga: text("lga"),
  identity_proof: text("identity_proof"),
  dob: text("dob"),
  gender: text("gender"),
  address: text("address"),
  ...baseProperties,
})

export const jobDetailsSchema = pgTable("job_details", {
  parastatal: text("parastatal").notNull(),
  grade_level: text("grade_level").notNull(),
  contribution_type: text("contribution_type").notNull(),
  organization_name: text("organization_name").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...baseProperties,
})
