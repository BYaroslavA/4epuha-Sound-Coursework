import type { Product } from '@/entities/product';

export type CartItem = {
  product: Product;
  quantity: number;
  size?: string;
};

export type CartState = {
  items: CartItem[];
};
