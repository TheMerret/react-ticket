import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { EditButtons } from '../EditButtons/EditButtons';

import styles from './ticket.module.css';

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
        width="100"
        height="120"
      ></Image>
      <div className={styles.content}>
        <div className={styles.description}>
          <Link href={`/film/${film.id}`}>{film.title}</Link>
          <span>{film.genre}</span>
        </div>
        <EditButtons movieId={film.id}></EditButtons>
      </div>
    </div>
  );
};
