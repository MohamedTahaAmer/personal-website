// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm"
import { pgTableCreator, serial, timestamp, uuid, varchar } from "drizzle-orm/pg-core"
import { env } from "@/env"

export const createTable = pgTableCreator((name) => `${env.DATABASE_PREFIX}${name}`)

export const senders = createTable("sender", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }),
	email: varchar("email", {
		length: 256,
	}).unique(),
	secretKey: uuid("secret_key").unique().defaultRandom(),
	createdAt: timestamp("created_at", {
		withTimezone: true,
	})
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: timestamp("updatedAt", {
		withTimezone: true,
	}),
})

export const senderRelations = relations(senders, ({ many, one }) => ({
	messages: many(messages),
}))

export const messages = createTable("messages", {
	id: serial("id").primaryKey(),
	message: varchar("message", { length: 4096 }),
	senderId: serial("sender_id")
		.references(() => senders.id)
		.notNull(),
	createdAt: timestamp("created_at", {
		withTimezone: true,
	})
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: timestamp("updatedAt", {
		withTimezone: true,
	}),
})

export const messagesRelations = relations(messages, ({ one }) => ({
	// - same as one to many, the child must have a field that will hold the parents id, and it's reference we link that field to the parent's id
	// - and in it's relations we link that field to the parent's id
	user: one(senders, {
		fields: [messages.senderId],
		references: [senders.id],
	}),
}))
