import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { EditButtons } from '../EditButtons/EditButtons';

import styles from './ticket.module.css';

import { genreMap } from '@/types/types';

export type Film = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
};

type Props = {
  film: Film;
};

export const TicketCard: FunctionComponent<Props> = function ({ film }) {
  return (
    <div className={styles.ticket}>
      <Image
        className={styles.poster}
        src={film.posterUrl}
        alt="Film Poster"
        width={300}
        height={450}
      ></Image>
      <div className={styles.content}>
        <div className={styles.description}>
          <Link className={styles.title} href={`/film/${film.id}`}>
            {film.title}
          </Link>
          <span className={styles.genre}>{genreMap[film.genre]}</span>
        </div>
        <EditButtons movieId={film.id}></EditButtons>
      </div>
    </div>
  );
};
