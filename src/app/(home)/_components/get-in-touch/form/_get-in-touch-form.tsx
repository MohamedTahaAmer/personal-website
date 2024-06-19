"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type UseFormReturn } from "react-hook-form"
import { z } from "zod"
import FormInput from "./form-input"
import TextAreaFormInput from "./form-text-area-input"

const formSchema = z.object({
	name: z.string().min(1, "Please enter your name"),
	email: z.string().email(),
	message: z.string().min(1, "Please enter a message"),
})

export type formSchemaType = z.infer<typeof formSchema>

export type Form = UseFormReturn<formSchemaType, undefined>

export function GetInTouchForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
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
					className="group/link relative z-20 self-end  bg-secondary px-6 text-2xl font-bold transition-all duration-500 hover:scale-110 hover:bg-transparent max-sm:px-4"
				>
					<div className=" z-20 bg-transparent max-sm:text-lg">Send</div>

					<span className="absolute left-0 top-0 z-10 block h-full w-0 rounded-lg bg-secondary-foreground transition-all duration-500 group-hover/link:w-full"></span>
				</Button>
			</form>
		</Form>
	)
}
