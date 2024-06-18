import { db } from "."
import { jobDetailsSchema, otpSchema, usersSchema } from "./schema"

const main = async () => {
  try {
    console.log("Seeding database")
    // Delete all data
    await db.delete(otpSchema)
    await db.delete(jobDetailsSchema)
    await db.delete(usersSchema)

    await db
      .insert(usersSchema)
      .values([{ phone: "234810893883", password: "" }])
  } catch (error) {
    console.error(error)
    throw new Error("Failed to seed database")
  }
}

main()
