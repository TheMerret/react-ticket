import { FunctionComponent } from 'react';

import styles from './film.module.css';

import { type Film } from '@/components/TicketCard/TicketCard';
import FilmCard from '@/components/FilmCard/FilmCard';
import Reviews from '@/components/Reviews/Reviews';

type Props = {
  params: { id: string };
};

const Film: FunctionComponent<Props> = function ({ params }) {
  return (
    <main className={styles.main}>
      <FilmCard filmId={params.id}></FilmCard>
      <Reviews filmId={params.id}></Reviews>
    </main>
  );
};

export default Film;
