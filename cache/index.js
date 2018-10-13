
let local = window.localStorage.getItem('testing');

console.log(local);
console.log(local===null);
console.log(local instanceof Object);

window.localStorage.setItem('testing',JSON.stringify({type:'admin',state:true}));

//local = JSON.parse(String(window.localStorage.getItem('testing')));
local = window.localStorage.getItem('testing');

console.log(JSON.parse(local));
console.log(typeof local);
console.log(local instanceof Object);

local['type'] = 'browse';

window.localStorage.setItem('testing',(local));

local = window.localStorage.getItem('testing');

console.log(JSON.parse(local));
console.log(typeof local);
console.log(local instanceof Object);
