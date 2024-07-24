import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { sendTestAPI, sendTestDTO, sendTestOutputDto, sendTestH } from "./test-Test"

export const testTest = createTRPCRouter({
	sendTest: publicProcedure.meta(sendTestAPI).input(sendTestDTO).output(sendTestOutputDto).mutation(sendTestH),
})
