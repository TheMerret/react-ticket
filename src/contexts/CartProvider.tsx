'use client';

import { FunctionComponent, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { TicketsContext } from './TicketsContext';

import { useGetMoviesQuery } from '@/redux/services/movieApi';
import { selectInCart } from '@/redux/features/cart/selector';

type Props = {
  children: ReactNode;
};

const CartProvider: FunctionComponent<Props> = function ({ children }) {
  const { data, isLoading, error } = useGetMoviesQuery(null);
  const filmIdsInCart = useSelector((state) => selectInCart(state));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>Not found</span>;
  }

  let films = [...data];

  films = films.filter((film) => filmIdsInCart.includes(film.id));
  return (
    <TicketsContext.Provider value={{ films, isRemoveButtonAdded: true }}>
      {children}
    </TicketsContext.Provider>
  );
};

export default CartProvider;
