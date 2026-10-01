import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  // Tells Prisma where to look for your schema files
  schema: "prisma/schema.prisma", 
  
  // Configures where your migration files go
  migrations: {
    path: "prisma/migrations",
  },
  
  // Maps your PostgreSQL connection string from your .env file
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
