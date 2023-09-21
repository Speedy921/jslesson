"use strict";

let numberOfFilms;

function

    start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Скільки фільмів Ви вже подивились?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів Ви вже подивились?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів'),
                b = prompt('На скільки його оцінююте?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLEvel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви классичний глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Виникла помилка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    togglevisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
