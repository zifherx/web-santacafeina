"use client";

import { CardProduct } from "@/components/shared/Card-Product";

import { products } from "@/common/data/products";
import { CartItem } from "@/common/interfaces/general.interface";

import { useCartStore } from "@/lib/car-store";

export function Productos() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: (typeof products)[0]) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    addItem(cartItem);
  };

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Nuestros Productos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Cada producto está seleccionado cuidadosamente para ofrecerte la
            mejor experiencia de café
          </p>
        </div>

        <div className="grid grid-cosl-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <CardProduct
              key={index}
              product={product}
              addItemToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
