"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms(){
    for(let i =0; i < 2; i++){
        const a = prompt('Один з останніх переглянутих фільмів'),
              b = prompt('На скільки його оцінююте?');
    
        if(a !=null && b !=null && a !='' && b !='' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms();

function detectPersonalLEvel(){
   if(personalMovieDB.count < 10){
    console.log('Переглянуто мало фільмів');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Ви классичний глядач');
}else if(personalMovieDB.count >= 30){
    console.log('Ви кіноман');
}else{
    console.log('Виникла помилка');
} 
}

detectPersonalLEvel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.geners[i - 1] = prompt(`Ваш улюбленний жанр під номером ${i}`);
    }
}

writeYourGenres(); 
