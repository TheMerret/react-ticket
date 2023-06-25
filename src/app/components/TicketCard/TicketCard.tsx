import Image from 'next/image';
import { FunctionComponent } from 'react';

import { EditButtons } from '../EditButtons/EditButtons';

import styles from './ticket.module.css';

type Props = {
  posterSrc: string;
  title: string;
  genre: string;
  count?: number;
  deletable?: boolean;
};

export const TicketCard: FunctionComponent<Props> = function ({
  posterSrc,
  title,
  genre,
  count = 0,
  deletable = false,
}) {
  return (
    <div className={styles.ticket}>
      <Image
        className={styles.poster}
        src={posterSrc}
        alt="Film Poster"
        width="100"
        height="120"
      ></Image>
      <div className={styles.content}>
        <div className={styles.description}>
          <span>{title}</span>
          <span>{genre}</span>
        </div>
        <EditButtons count={count} deletable={deletable}></EditButtons>
      </div>
    </div>
  );
};
