"use strict";

let numberOfFilms = +prompt ('How many movies have you watched?');


let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false

};

let a = prompt('óne of the mowies you have watched', ''),
    b = prompt('how would you rate it?', ''),
    c = prompt('óne of the mowies you have watched', ''),
    d = prompt('how would you rate it?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
