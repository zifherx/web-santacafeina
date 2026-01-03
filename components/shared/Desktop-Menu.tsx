import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export function DesktopMenu() {
  return (
    <NavigationMenu className="hidden md:flex items-center">
      <NavigationMenuList className="gap-8">
        <NavigationMenuItem>
          <Link href="/" passHref>
            <NavigationMenuLink className="text-lg font-medium hover:bg-background hover:text-accent">
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#productos" passHref>
            <NavigationMenuLink className="text-lg font-medium hover:bg-background hover:text-accent">
              Productos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#nosotros" passHref>
            <NavigationMenuLink className="text-lg font-medium hover:bg-background hover:text-accent">
              Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
