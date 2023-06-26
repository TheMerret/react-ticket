import './globals.css';
import Link from 'next/link';

import { StoreProvider } from '../redux/StoreProvider';

import styles from './layout.module.css';

import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          <Header></Header>
          {children}
          <footer className={styles.footer}>
            <Link href="/faq">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
