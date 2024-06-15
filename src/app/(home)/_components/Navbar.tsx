import { Logo } from "./Logo"
import MobileNavigation from "./mobile-navigation"
import NavigationLinks from "./navigation-links"

const Navbar = () => {
	return (
		<div className="flex h-14 items-center justify-between border-b px-6 shadow-lg">
			<Logo />
			{/* full screen navigation links */}
			<NavigationLinks className="flex max-md:hidden" />

			{/* mobile navigation links */}
			<div className="hidden max-md:block">
				<MobileNavigation />
			</div>
		</div>
	)
}

export default Navbar
