"use strict";

let numberOfFilms ;

function start(){
    numberOfFilms = +prompt ('How many movies have you watched?');   
    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('How many movies have you watched?');  
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false

};

// let a = prompt('óne of the mowies you have watched', ''),
//     b = prompt('how would you rate it?', ''),
//     c = prompt('óne of the mowies you have watched', ''),
//     d = prompt('how would you rate it?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
function rememberMyFilms(){
for (let i = 0; i < 2; i++){
   let  a = prompt('óne of the mowies you have watched', ''),
    b = prompt('how would you rate it?', '');

        if (a !=null && b != null && a !='' && b !='' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log ("done");
        } else {
            console.log('error');
            i--;
        }
    
}}

console.log(personalMovieDB);


function detectPersonalLevel(){
if (personalMovieDB.count < 10){
    prompt ('not too many movies watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    prompt ('classy');
} else if (personalMovieDB.count >= 30){
    prompt ('reall fun');
} else {
    alert('Error');
}
}
console.log(detectPersonalLevel);

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }

}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for (let i = 1; i <= 3; i++){s
            personalMovieDB.genres[i - 1] = prompt(`your favourite genre number ${i}`);
               
}}
writeYourGenres();