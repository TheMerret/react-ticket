import { QuestionAnswer } from '../components/QuestionAnswer/QuestionAnswer';

export default function Faq() {
  return (
    <main>
      <h1>Вопросы-ответы</h1>
      <QuestionAnswer question="Что такое Билетопоиск?">
        <p>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Какой компании принадлежит Билетопоиск?">
        <p>Яндекс</p>
      </QuestionAnswer>
      <QuestionAnswer question="Как купить билет на Билетопоиск?">
        <p>Добавьте фильм в корзину, потом перейдите к оплате</p>
      </QuestionAnswer>
      <QuestionAnswer question="Как оставить отзыв на Билетопоиск?">
        <p>
          Перейдите на страницу с фильмом, там вы увидите секцию с отзывами
        </p>
      </QuestionAnswer>
    </main>
  );
}
