import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

const timeStamp = {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}
export const usersSchema = pgTable("users", {
  phone: text("phone").notNull(),
  password: text("password").notNull(),
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
  ...timeStamp,
})

export const otpSchema = pgTable("otp", {
  phone: text("phone").notNull(),
  token: text("token").notNull(),
  signup_otp: text("signup_otp").notNull(),
  reset_password_otp: text("reset_password_otp").notNull(),
  ...timeStamp,
})

export const jobDetailsSchema = pgTable("job_details", {
  parastatal: text("parastatal").notNull(),
  grade_level: text("grade_level").notNull(),
  contribution_type: text("contribution_type").notNull(),
  organization_name: text("organization_name").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersSchema.id),
  ...timeStamp,
})

export const transactionsSchema = pgTable("transactions", {
  transaction_type: text("transaction_type").notNull(),
  amount: text("amount").notNull(),
  from: text("from").notNull(),
  date: text("date").notNull(),
  ...timeStamp,
})
