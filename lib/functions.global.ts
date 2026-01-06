import { CartItem } from "@/common/interfaces/general.interface";

export const formatearMonedaPE = (valor: number): string => {
  return Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(valor);
};

export const encodeMessageURI = (to: string, message: string) => {
  const mensajeCodificado = encodeURIComponent(message);
  return `https://wa.me/+51${to}?text=${mensajeCodificado}`;
};

export const generateSpeechWhatsApp = (
  products: CartItem[],
  total: number,
  deliverTo: string
) => {
  let message = `☕ *Santa Cafeína* ☕\n\n`;
  message += `¡Hola! Me interesa realizar la siguiente compra:\n\n`;

  products.forEach((product, index) => {
    message += `${index + 1}. *${product.name}*\n`;
    message += `Cantidad: ${product.quantity}\n`;
    message += `Precio: S/ ${product.price.toFixed(2)}\n\n`;
  });

  message += `💵 *TOTAL: S/. ${total.toFixed(2)}*\n\n`;
  message += `Por favor, confirmen disponibilidad.\n`;
  message += `¡Gracias!.\n`;

  return encodeMessageURI(deliverTo, message);
};
