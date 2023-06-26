import { FunctionComponent } from 'react';

import styles from './cart.module.css';

import Tickets from '@/components/Tickets/Tickets';
import CartProvider from '@/contexts/CartProvider';
import TicketsTotal from '@/components/TicketsTotal/TicketsTotal';

const Cart: FunctionComponent = function () {
  return (
    <main className={styles.main}>
      <div>
        <CartProvider>
          <Tickets></Tickets>
        </CartProvider>
      </div>
      <TicketsTotal></TicketsTotal>
    </main>
  );
};

export default Cart;
