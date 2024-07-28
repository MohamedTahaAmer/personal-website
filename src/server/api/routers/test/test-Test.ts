import { z } from "zod"
import type { CTX } from "../../trpc"

export let sendTestDTO = z.object({
	name: z.string().min(1, "Please enter your name").max(256, "Name too long (max 256 characters)").optional(),
})
// export let sendTestOutputDto = z.promise(z.object({ Test: z.literal("Test sent successfully") }))
export let sendTestOutputDto = z.promise(z.string().optional())

export async function sendTestHandler({ ctx, input }: { ctx: CTX; input: z.infer<typeof sendTestDTO> }) {
	console.log("Sending Test", input)
	return input.name
}
