import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { sendMessage, sendMessageDTO, sendMessageOutputDto } from "./controllers/send-message"

export const contactMeRouter = createTRPCRouter({
	sendMessage: publicProcedure
		.meta({
			openapi: {
				method: "POST",
				path: "/auth/login",
				tags: ["auth"],
				summary: "Login as an existing user",
			},
		})
		.input(sendMessageDTO)
		.output(sendMessageOutputDto)
		.mutation(sendMessage),
})
