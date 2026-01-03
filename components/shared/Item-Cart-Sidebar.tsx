"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

import { Button } from "../ui/button";

import { ITEM_SIDEBAR_CART_PROP } from "@/common/types/page-props";
import { formatearMonedaPE } from "@/lib/functions.global";

export function ItemCartSidebar({
  product,
  removeItem,
  updateQuantity,
}: ITEM_SIDEBAR_CART_PROP) {
  const { id, image, name, price, quantity } = product;

  return (
    <div className="flex gap-4 border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <Image
        src={`/products/${image}`}
        alt={name}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded-md"
      />

      <div className="flex-1 flex flex-col justify-between">
        {/* Detalles del producto */}
        <div>
          <h3 className="font-semibold text-azul text-sm">{name}</h3>
          <p className="text-azul font-bold mt-1">{formatearMonedaPE(price)}</p>
        </div>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
            className="w-6 h-6 flex items-center justify-center border border-border rounded hover:bg-muted transition-colors text-sm"
          >
            -
          </button>
          <span className="w-6 text-center text-sm font-semibold">
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="w-6 h-6 flex items-center justify-center border border-border rounded hover:bg-muted transition-colors text-sm"
          >
            +
          </button>
        </div>
      </div>

      <Button
        onClick={() => removeItem(id)}
        className="p-2 cursor-pointer bg-white hover:bg-destructive/10 rounded-lg transition-colors"
        aria-label="Eliminar producto"
      >
        <Trash2 className="w-4 h-4 text-destructive" />
      </Button>
    </div>
  );
}
