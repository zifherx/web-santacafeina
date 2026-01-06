"use client";

import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "../ui/button";

import { ItemCartSidebar } from "./Item-Cart-Sidebar";
import { generateSpeechWhatsApp } from "@/lib/functions.global";
import { useCartStore } from "@/lib/car-store";

export function CartSidebar() {
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const setIsOpen = useCartStore((state) => state.setIsOpen);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotal = useCartStore((state) => state.getTotal);

  const handleWhatsAppCheckout = () => {
    const total = getTotal();
    window.open(generateSpeechWhatsApp(items, total, "959260357"), "_blank");
    setIsOpen(false);
    clearCart();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-screen w-full sm:w-96 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-azulDark">Tu Carrito</h2>
          <Button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-azulDark cursor-pointer rounded-lg transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <p className="text-center text-azul py-8">Tu carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <ItemCartSidebar
                  key={item.id}
                  product={item}
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 sm:p-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">S/. {getTotal().toFixed(2)}</span>
            </div>

            <Button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] hover:bg-[ #20BA5A] text-white cursor-pointer font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-6 h-6" />
              Comprar por WhatsApp
            </Button>

            <Button
              onClick={clearCart}
              className="w-full py-2 border border-border text-white cursor-pointer hover:bg-azulDark rounded-lg transition-colors font-medium"
            >
              Vaciar carrito
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
