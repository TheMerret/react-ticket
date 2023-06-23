import { FunctionComponent } from 'react';

import { TicketCard } from '../components/TicketCard/TicketCard';

const Cart: FunctionComponent = function () {
  return (
    <main>
      <TicketCard
        posterSrc="https://i.postimg.cc/pdCLNMqX/1.webp"
        title="Властелин колец: Братство Кольца"
        genre="fantasy"
        deletable={true}
      ></TicketCard>
      <div>
        <span>Итого билетов</span>
        <span>7</span>
      </div>
    </main>
  );
};

export default Cart;

const DeletionModal: FunctionComponent = function () {
  return (
    <dialog>
      <button type="submit" aria-label="close" formMethod="dialog">
        X
      </button>
      <h2>Удаление билета</h2>
      <p>Вы уверены, что хотите удалить билет?</p>
      <button>Да</button>
      <button>Нет</button>
    </dialog>
  );
};
