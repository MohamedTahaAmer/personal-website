import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { sendMessage, sendMessageAPI, sendMessageDTO, sendMessageOutputDto } from "./send-message"

export const contactMeRouter = createTRPCRouter({
	sendMessage: publicProcedure.meta(sendMessageAPI).input(sendMessageDTO).output(sendMessageOutputDto).mutation(sendMessage),
})
