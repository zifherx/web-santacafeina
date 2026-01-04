import { CartIcon } from "./Cart-Icon";
import { MobileMenu } from "./Mobile-Menu";

export function MobileRight() {
  return (
    <div className="flex md:hidden items-center gap-4 pr-4">
      <CartIcon />
      <MobileMenu />
    </div>
  );
}
