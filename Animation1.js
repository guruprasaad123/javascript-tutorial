'use strict';

let events = require('events');
let util= require('util');


function Animation(name,episode)
{
this.name=name;
this.episode=episode;
}

util.inherits(Animation,events);


Animation.prototype.getDetails= function()
{
  return `the name : ${this.name} and the episode  : ${this.episode}`;
  this.emit('details',name);
};

let anime = new Animation('naruto',423);
anime.on('details',function(name){
  console.log('Details called..'+name);
})
console.log(anime.getDetails());
