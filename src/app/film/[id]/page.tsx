import Image from 'next/image';
import { FunctionComponent } from 'react';

import styles from './film.module.css';

type Props = {
  params: { id: number };
};

const Film: FunctionComponent<Props> = function ({ params }) {
  return (
    <main className={styles.main}>
      <FilmDetail
        posterSrc="https://i.postimg.cc/pdCLNMqX/1.webp"
        title="Властелин колец: Братство Кольца"
        genre="fantasy"
        year={2001}
        rating={8}
        director="Питер Джексон"
        description={
          'Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.'
        }
      ></FilmDetail>
      <ReviewCard
        name={'Роман'}
        text={
          'По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет...'
        }
        rating={8}
      ></ReviewCard>
    </main>
  );
};

export default Film;

type FilmDetailProps = {
  posterSrc: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  director: string;
  description: string;
};

const FilmDetail: FunctionComponent<FilmDetailProps> = function ({
  posterSrc,
  title,
  genre,
  year,
  rating,
  director,
  description,
}) {
  return (
    <div className={styles.film}>
      <div>
        <Image
          className={styles.poster}
          src={posterSrc}
          alt="Film Poster"
          width="400"
          height="500"
        ></Image>
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.short}>
          <div>
            <span>Жанр</span>
            {genre}
          </div>
          <div>
            <span>Год выпуска</span>
            {year}
          </div>
          <div>
            <span>Рейтинг</span>
            {rating}
          </div>
          <div>
            <span>Режиссер</span>
            {director}
          </div>
        </div>
        <div className={styles.about}>
          <span>Описание</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

const ReviewCard: FunctionComponent<ReviewCardProps> = function ({
  name,
  text,
  rating,
}) {
  return (
    <article className={styles.review}>
      <div>
        <Image
          src="/photo.svg"
          alt="Profile Picture"
          width={100}
          height={100}
        ></Image>
      </div>
      <div>
        <div className={styles['review-title']}>
          <h1>{name}</h1>
          <span>Оценка: {rating}</span>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
};
