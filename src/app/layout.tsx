import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header>
          <h1>
            <a href="/">Билетопоиск</a>
          </h1>
          <a href="#">
            <Image src="/basket.svg" alt="basket" height="28" width="25" />
          </a>
        </header>
        {children}
        <footer>
          <a href="/faq">Вопросы-ответы</a>
          <a href="/about">О нас</a>
        </footer>
      </body>
    </html>
  );
}
