import { pgTable, uuid, text, integer, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { customers } from "./customers.ts";

export const OrderStatusEnum = pgEnum("order_status", [
    "pending", "paid", "canceled"

])

export const orders = pgTable("orders", {
    id: text().primaryKey(),
    customerId: text().notNull().references(() => customers.id),
    amount: integer().notNull(),
    status: OrderStatusEnum().notNull().default("pending"),
    createdAt: timestamp({withTimezone: true}).notNull().defaultNow()
});