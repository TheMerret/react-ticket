import React, { FunctionComponent, ReactNode } from 'react';

import OptionsContext from './OptionsContext';

import { useGetCinemasQuery } from '@/redux/services/movieApi';
import { genreMap } from '@/types/types';

type Props = {
  children: ReactNode;
};

export const CinemasProvider: FunctionComponent<Props> = function ({
  children,
}) {
  const { data, isLoading, error } = useGetCinemasQuery(null);
  const cinemaOptions: Record<string, string> = {};
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <p>Кинотеатры не найдены</p>;
  }

  data.forEach((cinema) => {
    cinemaOptions[cinema.id] = cinema.name;
  });
  return (
    <OptionsContext.Provider value={{ cinemas: cinemaOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const GenresProvider: FunctionComponent<Props> = function ({
  children,
}) {
  return (
    <OptionsContext.Provider value={{ genres: genreMap }}>
      {children}
    </OptionsContext.Provider>
  );
};
