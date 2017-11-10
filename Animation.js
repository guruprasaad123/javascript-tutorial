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
this.emit('details');
}



}

module.exports=Animation;
