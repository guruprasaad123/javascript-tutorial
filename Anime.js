'use strict';
let events = require('events');

class Anime extends events{ //ES6 spec
constructor(name,episode)
{
    super();
    this.name=name;
    this.episode=episode;
}
getdetails()
{

    return `the name : ${this.name} and the episode  : ${this.episode}`;
    this.emits('details');
}

} 