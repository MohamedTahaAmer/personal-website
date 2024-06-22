import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationLinks from "./navigation-links"
import MobileNavigationLinks from "./mobile-navigation-links"

const MobileNavigation = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="size-6 text-secondary hover:scale-125" />
			</SheetTrigger>
			<SheetContent
				side="right"
				className="w-2/3 bg-background/10 p-0 pt-24 backdrop-blur-sm "
			>
				<MobileNavigationLinks className="flex flex-col items-center space-y-4" />
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavigation
