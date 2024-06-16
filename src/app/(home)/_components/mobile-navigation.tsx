import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationLinks from "./navigation-links"

const MobileNavigation = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="size-6 text-secondary hover:scale-125" />
			</SheetTrigger>
			<SheetContent
				side="left"
				className="w-2/3 bg-background/10 p-0 backdrop-blur-sm "
			>
				<SheetHeader>
					<SheetDescription className="pt-24">
						<NavigationLinks className="flex flex-col items-center space-y-4" />
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavigation
