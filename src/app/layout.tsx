import Image from 'next/image';

import './globals.css';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header>
          <nav className={styles.navbar}>
            <a className={styles.logo} href="/">
              Билетопоиск
            </a>
            <a href="/cart">
              <Image
                src="/basket.svg"
                className={styles.cart}
                alt="basket"
                height="32"
                width="32"
              />
            </a>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <a href="/faq">Вопросы-ответы</a>
          <a href="/about">О нас</a>
        </footer>
      </body>
    </html>
  );
}
