"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";

import { Card, CardContent } from "../ui/card";

import { PRODUCT_CARD_PROP } from "@/common/types/page-props";
import { formatearMonedaPE } from "@/lib/functions.global";
import { Button } from "../ui/button";

export function CardProduct({ product, addItemToCart }: PRODUCT_CARD_PROP) {
  const { name, description, featured, image, price, id } = product;

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${id * 100}ms` }}
    >
      <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-xl bg-white h-full flex flex-col rounded-lg group pt-0">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
            <Image
              src={`/products/${image}`}
              alt={`Imagen de ${name}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {featured && (
              <div className="absolute top-4 right-4 bg-verde text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shado-md">
                <Star className="w-3.5 h-3.5 fill-current" />
                Destacado
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-azul mb-2 group-hover:text-verde transition-colors duration-300 line-clamp-2">
              {name}
            </h3>
            <p className="text-gray-600 text-sm mb-9 leading-snug flex-1 max-w-50">
              {description}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-azul">
                  {formatearMonedaPE(price)}
                </span>

                <Button
                  variant="default"
                  type="button"
                  size="lg"
                  className="cursor-pointer bg-azul hover:bg-verde text-white font-semibold py-2.5 rounded-md transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95"
                  onClick={() => addItemToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4" strokeWidth={2} />
                  Añadir al carrito
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
