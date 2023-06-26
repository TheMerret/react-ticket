// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FiltersState = {
  filters: Record<string, string>;
  options: Record<string, Record<string, string>>;
};

type Payload = {
  name: string;
  value: string;
};

const initialState: FiltersState = {
  filters: {},
  options: {},
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (state, { payload }: PayloadAction<Payload>) => {
      state['filters'][payload.name] = payload.value;
    },
    removeFilter: (state, { payload }: PayloadAction<{ name: string }>) => {
      delete state['filters'][payload.name];
    },
    addOptions: (
      state,
      {
        payload,
      }: PayloadAction<{ name: string; values: Record<string, string> }>
    ) => {
      state['options'][payload.name] = payload.values;
    },
    reset: () => initialState,
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
