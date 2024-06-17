import { Logo } from "./Logo"
import MobileNavigation from "./mobile-navigation"
import NavigationLinks from "./navigation-links"

const Navbar = () => {
	return (
		<div className="fixed  inset-x-0 top-0  z-30 flex  w-full  justify-center border-b bg-background/70 p-4 shadow-lg backdrop-blur-sm">
			<div className="w-full max-w-7xl">
				<div className="flex h-14 w-full items-center  justify-between px-6 max-sm:px-2">
					<Logo />
					{/* full screen navigation links */}
					<NavigationLinks className="flex max-md:hidden" />

					{/* mobile navigation links */}
					<div className="hidden max-md:block">
						<MobileNavigation />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
