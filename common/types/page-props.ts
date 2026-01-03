import { CartItem, IProduct } from "../interfaces/general.interface";

export type Logo_NAVBAR_PROP = {
  source: string;
  href: string;
  name: string;
};

export type PRODUCT_CARD_PROP = {
  product: IProduct;
  addItemToCart: (product: IProduct) => void;
};

export type ITEM_SIDEBAR_CART_PROP = {
  product: CartItem;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};
