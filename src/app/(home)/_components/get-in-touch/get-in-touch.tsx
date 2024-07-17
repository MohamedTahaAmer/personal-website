import ContactFormSvg from "@/components/SVGs/contact-form-svg"
import { GetInTouchForm } from "./form/_get-in-touch-form"

const GetInTouch = () => {
	return (
		<div className="pt-40 max-md:pt-4" id="contact-me">
			<div className="relative">
				<div className="relative z-10 mx-auto w-fit bg-background px-4">
					<div className="gradient-text mb-8 text-center text-5xl font-bold uppercase tracking-widest max-sm:max-w-[70vw]">
						Get In Touch
					</div>
				</div>
				<div className="absolute inset-x-0 top-1/2 z-0 grow border-t border-lime-400"></div>
			</div>
			<div className="mx-auto mb-20 mt-24 grid max-w-7xl grid-cols-2 grid-rows-1 gap-8 px-8 max-sm:grid-cols-1">
				<ContactFormSvg className="w-full" />
				<GetInTouchForm />
			</div>
		</div>
	)
}

export default GetInTouch
