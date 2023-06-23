import { FunctionComponent } from 'react';

import { TicketCard } from './components/TicketCard/TicketCard';

export default function Home() {
  return (
    <main>
      <SearchFilter></SearchFilter>
      <TicketCard
        posterSrc="https://i.postimg.cc/pdCLNMqX/1.webp"
        title="Властелин колец: Братство Кольца"
        genre="fantasy"
      ></TicketCard>
    </main>
  );
}

const SearchFilter: FunctionComponent = function ({}) {
  return (
    <aside>
      <h1>Фильтры</h1>
      <fieldset>
        <div>
          <label htmlFor="title">Название</label>
          <input type="text" id="title" placeholder="Введите название" />
        </div>
        <div>
          <label htmlFor="genre">Жанр</label>
          <select name="genre" id="genre"></select>
        </div>
        <div>
          <label htmlFor="cinema">Кинотеатр</label>
          <select name="cinema" id="cinema"></select>
        </div>
      </fieldset>
    </aside>
  );
};
