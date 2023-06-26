import { FiltersState } from '.';

type State = {
  filters: FiltersState;
};

const selectFiltersModule = (state: State) => state.filters;

export const selectFilter = (state: State, filterName: string) =>
  selectFiltersModule(state)['filters'][filterName] || null;

export const selectOptions = (state: State, optionsName: string) =>
  selectFiltersModule(state)['options'][optionsName] || null;
