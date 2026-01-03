import { IProduct } from "../interfaces/general.interface";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Café Molido",
    description: "100% Orgánico - 250grs. Contenido Neto",
    price: 28,
    image: "cafe-250g-1.png",
    featured: true,
    isActive: true,
  },
  {
    id: 2,
    name: "Taza Cerámica",
    description: "Taza Cerámica - 5 colores por unidad",
    price: 15,
    image: "taza-ceramica-1.png",
    featured: true,
    isActive: true,
  },
  {
    id: 3,
    name: "Filtros para Café",
    description: "Bolsitas de filtro de café molido - 10 und. de filtros",
    price: 9,
    image: "filtrante-1.png",
    featured: true,
    isActive: true,
  },
];
