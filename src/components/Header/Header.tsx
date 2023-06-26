'use client';

import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import styles from './header.module.css';

import { selectAllAmount } from '@/redux/features/cart/selector';

const Header = function () {
  const ticketsAmount = useSelector((state) => selectAllAmount(state));
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link className={styles.logo} href="/">
          Билетопоиск
        </Link>
        <Link href="/cart" className={styles.cart}>
          {ticketsAmount > 0 && <p>{ticketsAmount}</p>}
          <Image
            src="/basket.svg"
            className={styles.cart}
            alt="basket"
            height="32"
            width="32"
          />
        </Link>
      </nav>
    </header>
  );
};
export default Header;
