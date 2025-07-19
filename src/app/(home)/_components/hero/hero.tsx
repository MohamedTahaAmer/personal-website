import Image from "next/image"
import HeroButtons from "./hero-buttons"
import HeroParagraph from "./hero-paragraph"
import TechnologiesMarquee from "./technologies-marquee"

const Hero = () => {
	return (
		<div className="relative">
			<div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-12 gap-x-4 gap-y-8 px-4 max-lg:grid-cols-7 sm:pt-2">
				<div className="relative col-span-4 h-[70vh] overflow-hidden rounded-md max-lg:hidden">
					<Image
						priority={true}
						fill
						// the image is hidden on mobile so we need to set the sizes to 0vw, otherwise it will take about 33% of the screen
						sizes="(max-width: 1024px) 0vw, 33vw"
						className="object-cover"
						alt="Mohamed Amer Personal Image"
						src="/full.webp"
					/>
				</div>
				<div className="relative z-10 col-span-8 mx-auto max-w-7xl p-4 text-left sm:pl-12">
					<h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
						<span className="gradient-text text-5xl font-bold max-md:text-4xl max-sm:block">Full-Stack Web Developer</span>{" "}
					</h1>
					<div className="relative w-fit pb-20 pr-16 max-sm:px-4 max-sm:pt-4 sm:ml-16 sm:pt-6">
						<HeroParagraph />
						<div className="absolute bottom-0 right-0 flex gap-4">
							<HeroButtons />
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 right-0 flex gap-4 max-sm:hidden">
				<TechnologiesMarquee />
			</div>
		</div>
	)
}

export default Hero
