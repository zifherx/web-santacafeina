import { DesktopMenu } from "../shared/Desktop-Menu";
import { LogoNavbar } from "../shared/Logo-Navbar";
import { DesktopRight } from "../shared/Desktop-Right";
import { MobileRight } from "../shared/Mobile-Right";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <LogoNavbar
          href="/"
          name="Santa Cafeina"
          source="/images/logo-original.png"
        />

        {/* Navigation */}
        <DesktopMenu />

        {/* Desktop Right Section */}
        <DesktopRight />

        {/* Mobile Right Section */}
        <MobileRight />
      </div>
    </header>
  );
}
