'use strict';

let events = require('events');

class Animation extends events{

constructor(name,episode)
{
  super();
this.name=name;
this.episode=episode;
}


getDetails()
{
return `the name : ${this.name} and the episode  : ${this.episode}`;
this.emits('details');
}



}

let anime = new Animation('naruto',323);
console.log(anime.getDetails());
