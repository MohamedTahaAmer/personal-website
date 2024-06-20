CREATE TABLE IF NOT EXISTS "personal_websie_0_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" varchar(4096),
	"sender_id" serial NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "personal_websie_0_sender" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	"secret_key" uuid DEFAULT gen_random_uuid(),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "personal_websie_0_sender_email_unique" UNIQUE("email"),
	CONSTRAINT "personal_websie_0_sender_secret_key_unique" UNIQUE("secret_key")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "personal_websie_0_messages" ADD CONSTRAINT "personal_websie_0_messages_sender_id_personal_websie_0_sender_id_fk" FOREIGN KEY ("sender_id") REFERENCES "public"."personal_websie_0_sender"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
