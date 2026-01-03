import { Banner } from "@/components/sections/(home)/Banner";
import { Nosotros } from "@/components/sections/(home)/Nosotros";
import { Productos } from "@/components/sections/(home)/Productos";
import { Shipping } from "@/components/sections/(home)/Shipping";
import { CartSidebar } from "@/components/shared/Cart-Sidebar";

export default function HomePage() {
  return (
    <div>
      <CartSidebar />
      <Banner />
      <Productos />
      <Nosotros />
      <Shipping />
    </div>
  );
}
