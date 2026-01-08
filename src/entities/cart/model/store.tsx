import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

import type { CartState } from './types';
import type { Product } from '@/entities/product';

type CartContextValue = {
  state: CartState;
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: string, size?: string) => void;
  decrementFromCart: (productId: string, size?: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : { items: [] };
    } catch {
      return { items: [] };
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product, size?: string) => {
    setState((prev) => {
      const existing = prev.items.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existing) {
        return {
          items: prev.items.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...prev.items, { product, quantity: 1, size }],
      };
    });
  };

  const decrementFromCart = (productId: string, size?: string) => {
    setState((prev) => {
      const existing = prev.items.find((item) => item.product.id === productId && item.size === size);

      if (existing && existing.quantity > 1) {
        return {
          items: prev.items.map((item) =>
            item.product.id === productId && item.size === size
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }

      return {
        items: prev.items.filter((item) => !(item.product.id === productId && item.size === size)),
      };
    });
  };

  const removeFromCart = (productId: string, size?: string) => {
    setState((prev) => ({
      items: prev.items.filter(
        (item) => !(item.product.id === productId && item.size === size)
      ),
    }));
  };

  const clearCart = () => {
    setState({ items: [] });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, decrementFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return ctx;
}
