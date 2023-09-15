"use strict";

const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів', ''),
      b = prompt('На скільки його оцінююте?', ''),
      c = prompt('Один з останніх переглянутих фільмів?',''),
      d = prompt('На скільки його оцінююте?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
