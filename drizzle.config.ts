import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./server/db/schema/*.ts",
  out: "./drizzle",
  dbCredentials: {
    dbName: process.env.DB_NAME!,
    wranglerConfigPath: "",
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
})
