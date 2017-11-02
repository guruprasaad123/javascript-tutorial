let events = require('events');
let util= require('util');


function Animation(name,episode)
{
this.name=name;
this.episode=episode;
}

//util.inherits(Animation,events);
Animation.prototype.__proto__= events.prototype;

Animation.prototype.getDetails= function()
{
  return `the name : ${this.name} and the episode  : ${this.episode}`;
  this.emits('details');
};

let anime = new Animation('naruto',423);
console.log(anime.getDetails());
