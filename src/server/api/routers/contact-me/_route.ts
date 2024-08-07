import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { sendMessage, sendMessageDTO, sendMessageOutputDto } from "./send-message"

export const contactMeRouter = createTRPCRouter({
	sendMessage: publicProcedure.input(sendMessageDTO).output(sendMessageOutputDto).mutation(sendMessage),
})
