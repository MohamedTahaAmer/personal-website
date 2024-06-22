"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { api } from "@/trpc/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"
import { useForm, type UseFormReturn } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import FormInput from "./form-input"
import TextAreaFormInput from "./form-text-area-input"
import "./input-chrome-reset.css"

const formSchema = z.object({
	name: z
		.string()
		.min(1, "Please enter your name")
		.max(256, "Name too long (max 256 characters)"),
	email: z
		.string()
		.email()
		.max(256, "Email too long (max 256 characters)")
		.min(1, "Please enter your email"),
	message: z
		.string()
		.min(1, "Please enter a message")
		.max(4096, "Message too long (max 4096 characters)"),
})
export type formSchemaType = z.infer<typeof formSchema>
export type Form = UseFormReturn<formSchemaType, undefined>

export function GetInTouchForm() {
	const [loading, setLoading] = useState(false)
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	let contactMe = api.contactMe.sendMessage.useMutation({
		onMutate: () => {
			setLoading(true)
		},
		onSuccess: () => {
			toast.success("Message sent successfully")
			form.reset()
		},
		onError: (error) => {
			toast.error(error.message)
		},
		onSettled: () => {
			setLoading(false)
		},
	})
	function onSubmit(values: z.infer<typeof formSchema>) {
		contactMe.mutate(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-10"
			>
				<FormInput form={form} name="name" label="Name" />
				<FormInput form={form} name="email" label="Email" />
				<TextAreaFormInput form={form} name="message" label="Message" />
				<Button
					type="submit"
					className="flex gap-2 self-end bg-secondary font-bold text-background hover:bg-secondary-foreground "
				>
					<div className=" z-20 bg-transparent max-sm:text-lg">Send</div>
					{loading && <LoaderCircle className="size-4 animate-spin" />}
				</Button>
			</form>
		</Form>
	)
}
