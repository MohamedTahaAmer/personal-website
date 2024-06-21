import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { type formSchemaType, type Form } from "./_get-in-touch-form"
import { cn } from "@/lib/utils"

const FormInput = ({
	form,
	name,
	label,
	placeholder,
	description,
	type,
}: {
	form: Form
	name: keyof formSchemaType
	label: string
	placeholder?: string
	description?: string
	type?: string
}) => {
	let { register } = form
	let field = register(name)
	let isError = form.formState.errors[name]

	return (
		<FormField
			control={form.control}
			name={name}
			render={() => (
				<FormItem className="relative space-y-0">
					<FormLabel
						className={cn(
							"absolute left-0 top-0 z-10  -translate-y-1/2 bg-background px-2 ",
							isError ? "text-destructive" : "text-secondary-foreground",
						)}
					>
						{label}
					</FormLabel>

					<FormControl>
						<Input
							type={type ? type : "text"}
							placeholder={placeholder}
							{...field}
						/>
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage className="absolute -bottom-6 left-0 block pl-12  pt-2" />
				</FormItem>
			)}
		/>
	)
}

export default FormInput
