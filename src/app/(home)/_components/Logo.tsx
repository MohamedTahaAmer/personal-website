import { env } from "@/env"
import { GITHUB_URL, LINKED_IN_URL, TWITTER_URL } from "@/lib/constants"
import { File, Github, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { UrlObject } from "url"

export const Logo = () => {
	return (
		<div className="flex items-center gap-2">
			<Link href="/">
				<div className="relative aspect-square w-12 overflow-hidden rounded-md">
					<Image fill sizes="48px" className="object-cover" alt="Mohamed Amer Personal Image" src="/me.png" />
				</div>
			</Link>
			<div className=" grid grid-cols-1 grid-rows-2 place-items-center gap-y-1">
				<Link href="/">
					<p className="h-6 text-xl font-bold text-secondary">Mohamed Amer</p>
				</Link>
				<div className="flex h-6 gap-4 text-xs text-secondary-foreground ">
					<Link href={env.NEXT_PUBLIC_CV_LINK as unknown as UrlObject} target="_blank">
						<File className="size-5 duration-200 hover:scale-125 hover:text-secondary" />
					</Link>
					<Link href={LINKED_IN_URL as unknown as UrlObject}>
						<Linkedin className="size-5 duration-200 hover:scale-125 hover:text-secondary" />{" "}
					</Link>

					<Link href={TWITTER_URL as unknown as UrlObject}>
						<Twitter className="size-5 duration-200 hover:scale-125 hover:text-secondary" />{" "}
					</Link>

					<Link href={GITHUB_URL as unknown as UrlObject}>
						<Github className="size-5 duration-200 hover:scale-125 hover:text-secondary" />{" "}
					</Link>

					<Link href="/" className="hidden">
						<Youtube className="size-5 duration-200 hover:scale-125 hover:text-secondary" />{" "}
					</Link>
				</div>
			</div>
		</div>
	)
}
