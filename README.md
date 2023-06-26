# ReactTicket

Запускаем сервер командой `node src/index.js`

## Запускаем фронт

```shell
npm i
```

```shell
npm run dev
```

Дефолтно запускается сервер на http://localhost:3001.

Кинотеатры:
http://localhost:3001/api/cinemas

Фильмы:
http://localhost:3001/api/movies - все фильмы
http://localhost:3001/api/movies?cinemaId={айдишка кинотеатра} - фильмы в конкретном кинотеатре
http://localhost:3001/api/movie?movieId={айдишка фильма} - конкретный фильм

Отзывы:
http://localhost:3001/api/reviews - все отзывы
http://localhost:3001/api/reviews?movieId={айдишка фильма} - отзывы конкретного фильма
