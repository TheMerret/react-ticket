// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const MAX_TICKETS = 30;

export type CartState = Record<string, number>;

type Payload = keyof CartState;

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<Payload>) => {
      const count = state[payload] || 0;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }: PayloadAction<Payload>) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },

    reset: () => initialState,
    remove: (state, { payload }: PayloadAction<Payload>) => {
      delete state[payload];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
