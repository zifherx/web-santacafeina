import { BadgePeru } from "./Badge-Peru";
import { CartIcon } from "./Cart-Icon";

export function DesktopRight() {
  return (
    <div className="hidden sm:flex items-center gap-6 pr-4">
      <CartIcon />
      <BadgePeru />
    </div>
  );
}
