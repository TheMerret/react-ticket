'use client';

import { FunctionComponent, useContext } from 'react';

import { TicketCard } from '../TicketCard/TicketCard';

import styles from './tickets.module.css';

import { TicketsContext } from '@/contexts/TicketsContext';

const Tickets: FunctionComponent = function ({}) {
  const { films } = useContext(TicketsContext);

  return (
    <div className={styles.tickets}>
      {films.map((film) => (
        <TicketCard film={film} key={film.id}></TicketCard>
      ))}
    </div>
  );
};

export default Tickets;
