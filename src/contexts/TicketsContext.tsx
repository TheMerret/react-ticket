import { createContext } from 'react';

type Context = {
  films: any[];
  isRemoveButtonAdded: boolean;
};

export const TicketsContext = createContext<Context>({
  films: [],
  isRemoveButtonAdded: false,
});
