import { env } from "@/env"
import { GITHUB_URL, LINKED_IN_URL, TWITTER_URL } from "@/lib/constants"
import { File, Github, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

import type { UrlObject } from "url"

export const SocaialMediaIcons = () => {
	return (
		<div className="flex h-6 gap-4 px-4 text-xs text-secondary-foreground">
			<Link href={env.NEXT_PUBLIC_CV_LINK as unknown as UrlObject} target="_blank" aria-label="Open CV in a new tab">
				<File className="size-7 duration-200 hover:scale-125 hover:text-secondary" />
			</Link>
			<Link href={LINKED_IN_URL as unknown as UrlObject} target="_blank" aria-label="Open LinkedIn in a new tab">
				<Linkedin className="size-7 duration-200 hover:scale-125 hover:text-secondary" />{" "}
			</Link>

			<Link href={TWITTER_URL as unknown as UrlObject} target="_blank" aria-label="Open My Personal Twitter in a new tab">
				<Twitter className="size-7 duration-200 hover:scale-125 hover:text-secondary" />{" "}
			</Link>

			<Link href={GITHUB_URL as unknown as UrlObject} target="_blank" aria-label="Open My Github in a new tab">
				<Github className="size-7 duration-200 hover:scale-125 hover:text-secondary" />{" "}
			</Link>

			<Link href="/" className="hidden" target="_blank" aria-label="Open My Youtube Channel in a new tab">
				<Youtube className="size-7 duration-200 hover:scale-125 hover:text-secondary" />{" "}
			</Link>
		</div>
	)
}
