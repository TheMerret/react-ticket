'use client';

import { FunctionComponent, ReactNode, useContext } from 'react';
import { useSelector } from 'react-redux';

import { TicketsContext } from './TicketsContext';

import {
  useGetMoviesByCinemaIdQuery,
  useGetMoviesQuery,
} from '@/redux/services/movieApi';
import { selectFilter } from '@/redux/features/filters/selector';

type Props = {
  children: ReactNode;
};

const TicketProvider: FunctionComponent<Props> = function ({ children }) {
  const filter = {
    title: useSelector((state) => selectFilter(state, 'title') || ''),
    genre: useSelector((state) => selectFilter(state, 'genre') || ''),
    cinema: useSelector((state) => selectFilter(state, 'cinema') || ''),
  };

  /* eslint-disable react-hooks/rules-of-hooks */
  const { data, isLoading, error } = filter.cinema
    ? useGetMoviesByCinemaIdQuery(filter.cinema)
    : useGetMoviesQuery(null);
  /* eslint-enable react-hooks/rules-of-hooks */

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>Not found</span>;
  }

  let films = [...data];

  if (filter.title) {
    films = films.filter((film) =>
      film.title.toLowerCase().includes(filter.title.toLowerCase())
    );
  }
  if (filter.genre) {
    films = films.filter(
      (film) => film.genre.toLowerCase() === filter.genre.toLowerCase()
    );
  }

  return (
    <TicketsContext.Provider value={{ films, isRemoveButtonAdded: false }}>
      {children}
    </TicketsContext.Provider>
  );
};

export default TicketProvider;
