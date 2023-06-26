'use client';

import { FunctionComponent } from 'react';

import styles from './page.module.css';

import Tickets from '@/components/Tickets/Tickets';
import TicketProvider from '@/contexts/FilmsProvider';
import TicketFilters from '@/components/TicketFilters/TicketFilters';

('@/components/TicketFilters/TicketFilters');

export default function Home() {
  return (
    <main className={styles.main}>
      <TicketFilters></TicketFilters>
      <div className={styles.cards}>
        <TicketProvider>
          <Tickets></Tickets>
        </TicketProvider>
      </div>
    </main>
  );
}
