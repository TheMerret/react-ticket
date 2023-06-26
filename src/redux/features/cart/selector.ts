import { createSelector } from '@reduxjs/toolkit';

import { CartState } from '.';

type State = {
  cart: CartState;
};

const selectCartModule = (state: State) => state.cart;

export const selectProductAmount = (state: State, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectAllAmount = (state: State) => {
  let amount = 0;
  const cart = selectCartModule(state);
  for (const id in cart) {
    amount += cart[id];
  }
  return amount;
};

export const selectInCart = createSelector(
  [selectCartModule],
  (cartModule) => {
    return Object.keys(cartModule);
  }
);
