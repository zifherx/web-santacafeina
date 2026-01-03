import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type REACT_GENERAL_ICON = LucideIcon | IconType;

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
  isActive: boolean;
}

export interface IStatsNosotros {
  id: number;
  icon: REACT_GENERAL_ICON;
  title: string;
  description: string;
}

export interface ILeaf {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}
