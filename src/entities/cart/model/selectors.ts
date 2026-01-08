import type { CartState } from './types';

export const selectCartCount = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state: CartState) =>
  state.items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
