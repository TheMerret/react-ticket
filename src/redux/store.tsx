import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './features/cart';
import { movieApi } from './services/movieApi';
import { filtersReducer } from './features/filters';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    filters: filtersReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([movieApi.middleware]);
  },
});
