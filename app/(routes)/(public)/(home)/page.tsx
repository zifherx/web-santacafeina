import { Banner } from "@/components/sections/(home)/Banner";
import { Nosotros } from "@/components/sections/(home)/Nosotros";
import { Productos } from "@/components/sections/(home)/Productos";
import { Shipping } from "@/components/sections/(home)/Shipping";
import { BtnWhatsApp } from "@/components/shared/Btn-WhatsApp";
import { CartSidebar } from "@/components/shared/Cart-Sidebar";

export default function HomePage() {
  return (
    <div>
      <CartSidebar />
      <Banner />
      <Productos />
      <Nosotros />
      <Shipping />
      <BtnWhatsApp />
    </div>
  );
}
