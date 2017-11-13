'use strict';

let Anime= require('./Anime');


let anime = new Anime('naruto',423);
anime.on('details',function(){
    console.log('details method called : ');
});

console.log(anime.getDetails());
