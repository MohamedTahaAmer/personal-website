import { api, TRPCReactProvider } from "@/trpc/react"
import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

const wrapper = ({ children }: { children: React.ReactNode }) => <TRPCReactProvider> {children} </TRPCReactProvider>

// - this is an end to end to test to our tRPC API
describe("sendTest", () => {
	it("should return the string that's passed to it", async () => {
		const { result: sendTest } = renderHook(() => api.test.sendTest.useMutation(), { wrapper })
		const res = await sendTest.current.mutateAsync({ name: "Hello World" })
		expect(res).toEqual("Hello World")
	})
})
