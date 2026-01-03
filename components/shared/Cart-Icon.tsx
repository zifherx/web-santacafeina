"use client";

import { ShoppingCart } from "lucide-react";

import { Button } from "../ui/button";

import { useCartStore } from "@/lib/car-store";

export function CartIcon() {
  const item = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const setIsOpen = useCartStore((state) => state.setIsOpen);
  const itemCount = item.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Button
      className="relative cursor-pointer bg-transparent hover:bg-transparent hover:text-azul"
      aria-label="Abrir carrito"
      onClick={() => setIsOpen(!isOpen)}
    >
      <ShoppingCart className="w-6 h-6 text-foreground" />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-azul text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          {itemCount}
        </div>
      )}
    </Button>
  );
}
