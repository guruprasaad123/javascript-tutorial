'use strict';
let events = require('events');

module.exports=class Anime extends events{ //ES6 spec
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

