import { BadgePeru } from "../shared/Badge-Peru";
import { CartIcon } from "../shared/Cart-Icon";
import { DesktopMenu } from "../shared/Desktop-Menu";
import { LogoNavbar } from "../shared/Logo-Navbar";

export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-28">
        {/* Logo */}
        <LogoNavbar
          href="/"
          name="Santa Cafeina"
          source="/images/logo-original.png"
        />

        {/* Navigation */}
        <DesktopMenu />

        {/* Logo Peru */}
        <div className="hidden sm:flex items-center gap-4 pr-4">
          <CartIcon />
          <BadgePeru />
        </div>
      </div>
    </header>
  );
}
