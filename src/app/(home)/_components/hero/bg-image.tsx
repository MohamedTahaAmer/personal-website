import Image from "next/image"

const BgImage = () => {
	return (
		<div className="absolute inset-0 z-0 w-full overflow-hidden max-lg:hidden">
			<Image fill priority={true} sizes="(min-width: 1536px) 100vw" className="object-cover" alt="Mountain Image" src="/hero/hero.png" />
		</div>
	)
}

export default BgImage
