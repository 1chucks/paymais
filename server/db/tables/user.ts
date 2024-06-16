import { eq } from "drizzle-orm"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

import { db } from ".."

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  first_name: text("first_name"),
  last_name: text("last_name"),
  email: text("email"),
  country: text("country"),
  state: text("state"),
  lga: text("lga"),
  identity_proof: text("identity_proof"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export class UserRepository {
  async getUser(params: { id: number }) {
    try {
      db.query.users.findFirst({
        where: (user, { eq }) => eq(user.id, params.id),
        columns: {
          id: true,
          phone: true,
          first_name: true,
        },
      })
    } catch (error) {}
  }
  async createUser(params: { phone: string; password: string }) {
    try {
      const res = await db.insert(users).values({
        phone: params.phone,
        password: params.password,
      })
    } catch (error) {}
    // todo: Log
  }
  async updateUser(params: {
    id: number
    first_name?: string
    last_name?: string
    country?: string
    lga?: string
    state?: string
  }) {
    try {
      const res = await db
        .update(users)
        .set({
          first_name: params.first_name,
          last_name: params.last_name,
          country: params.country,
          lga: params.lga,
        })
        .where(eq(users.id, params.id))
      // todo: Log
      return res
    } catch (error) {
      // todo: Log
    }
  }
  async updatePassword(params: { id: number; newPassword?: string }) {
    try {
      const res = await db
        .update(users)
        .set({
          password: params.newPassword,
        })
        .where(eq(users.id, params.id))
      // todo: Log
      return res
    } catch (error) {
      // todo: Log
    }
  }
}
