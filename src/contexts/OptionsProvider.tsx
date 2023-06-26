import React, { FunctionComponent, ReactNode } from 'react';

import OptionsContext from './OptionsContext';

import { useGetCinemasQuery } from '@/redux/services/movieApi';

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

export const genreMap = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия',
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
