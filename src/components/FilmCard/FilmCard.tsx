'use client';

import Image from 'next/image';
import { FunctionComponent } from 'react';

import { type Film } from '../TicketCard/TicketCard';
import { EditButtons } from '../EditButtons/EditButtons';

import styles from './card.module.css';

import { useGetMovieByIdQuery } from '@/redux/services/movieApi';
import { genreMap } from '@/types/types';

type Props = {
  filmId: string;
};

const FilmCard: FunctionComponent<Props> = function ({ filmId }) {
  const { data, isLoading, error } = useGetMovieByIdQuery(filmId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>Not found</span>;
  }

  const film: Film = data;

  return (
    <div className={styles.film}>
      <div>
        <Image
          className={styles.poster}
          src={film.posterUrl}
          alt="Film Poster"
          width="400"
          height="500"
        ></Image>
      </div>
      <div className={styles.description}>
        <div className={styles.header}>
          <h1 className={styles.title}>{film.title}</h1>
          <EditButtons movieId={film.id}></EditButtons>
        </div>
        <div className={styles.short}>
          <div>
            <span>Жанр</span>
            {genreMap[film.genre]}
          </div>
          <div>
            <span>Год выпуска</span>
            {film.releaseYear}
          </div>
          <div>
            <span>Рейтинг</span>
            {film.rating}
          </div>
          <div>
            <span>Режиссер</span>
            {film.director}
          </div>
        </div>
        <div className={styles.about}>
          <span>Описание</span>
          <p>{film.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
