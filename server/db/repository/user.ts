import { eq } from "drizzle-orm"

import { db } from ".."
import { usersSchema } from "./schema"

export class UserRepository {
  async getUser(params: { id: number }) {
    try {
      db.query.usersSchema.findFirst({
        where: (user, { eq }) => eq(usersSchema.id, params.id),
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
      const res = await db.insert(usersSchema).values({
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
        .update(usersSchema)
        .set({
          first_name: params.first_name,
          last_name: params.last_name,
          country: params.country,
          lga: params.lga,
        })
        .where(eq(usersSchema.id, params.id))
      // todo: Log
      return res
    } catch (error) {
      // todo: Log
    }
  }
  async updatePassword(params: { id: number; newPassword?: string }) {
    try {
      const res = await db
        .update(usersSchema)
        .set({
          password: params.newPassword,
        })
        .where(eq(usersSchema.id, params.id))
      // todo: Log
      return res
    } catch (error) {
      // todo: Log
    }
  }
}
