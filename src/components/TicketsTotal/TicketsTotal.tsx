'use client';

import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import styles from './total.module.css';

import { selectAllAmount } from '@/redux/features/cart/selector';

const TicketsTotal: FunctionComponent = function ({}) {
  const ticketsAmount = useSelector((state) => selectAllAmount(state));

  return (
    <div className={styles.total}>
      <span>Итого билетов:</span>
      <span>{ticketsAmount}</span>
    </div>
  );
};

export default TicketsTotal;
