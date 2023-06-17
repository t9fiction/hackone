import { integer, varchar, serial, pgTable } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cart_Items = pgTable("cart_items", {
  _id: varchar("_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  size: varchar("size", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const db = drizzle(sql);

