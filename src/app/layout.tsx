import Image from 'next/image';

import './globals.css';
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
            <a href="/faq">Вопросы-ответы</a>
            <a href="/about">О нас</a>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
