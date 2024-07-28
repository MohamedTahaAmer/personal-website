import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { sendTestDTO, sendTestOutputDto, sendTestH } from "./test-Test"

export const testTest = createTRPCRouter({
	sendTest: publicProcedure.input(sendTestDTO).output(sendTestOutputDto).mutation(sendTestH),
})
