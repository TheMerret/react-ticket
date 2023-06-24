import { FunctionComponent } from 'react';

import styles from './page.module.css';
import { TicketCard } from './components/TicketCard/TicketCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchFilter></SearchFilter>
      <div className={styles.cards}>
        <TicketCard
          posterSrc="https://i.postimg.cc/pdCLNMqX/1.webp"
          title="Властелин колец: Братство Кольца"
          genre="fantasy"
        ></TicketCard>
      </div>
    </main>
  );
}

const SearchFilter: FunctionComponent = function ({}) {
  return (
    <aside className={styles.filters}>
      <h1>Фильтры</h1>
      <div className={styles.filter}>
        <label htmlFor="title">Название</label>
        <input
          className={styles['filter-input']}
          type="text"
          id="title"
          placeholder="Введите название"
        />
      </div>
      <div className={styles.filter}>
        <label htmlFor="genre">Жанр</label>
        <select
          className={styles['filter-input']}
          name="genre"
          id="genre"
          defaultValue="default"
        >
          <option value="default" disabled hidden>
            Выберите жанр
          </option>
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor="cinema">Кинотеатр</label>
        <select
          className={styles['filter-input']}
          name="cinema"
          id="cinema"
          defaultValue="default"
        >
          <option value="default" disabled hidden>
            Выберите кинотеатр
          </option>
        </select>
      </div>
    </aside>
  );
};
