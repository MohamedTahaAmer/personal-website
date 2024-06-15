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
			<SheetContent side="left" className="w-1/2 p-0 ">
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
