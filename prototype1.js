
let power={
strength:'true'
};
/*
functions have
 * __proto__ which is pre-defined to be Function.prototype.
* prototype which is user-defined like any object .

*/
function Hero(name)
{
  console.log('the Hero is '+Hero.__proto__); // what's function () { [native code] } means
this.name= name;
}
console.log(Hero['prototype']);   // Hero.prototype is set to new object's [[Prototype]] /__proto__
console.log(Hero.__proto__);

//Hero.prototype=power;
// Hero.prototype={constructor:Hero};  --- under the Hood
let hero = new Hero('batman');

  console.log(hero.__proto__); // objects does'nt have prototype only __proto__
  console.log(hero.[[Prototype]]); // true
  console.log(Hero.__proto__=== Function.prototype);

  console.log(Hero.prototype===hero.__proto__); // function constructor's prototype is assigned to newly created object's __proto__

console.log(Hero.prototype.prototype); // undefined
console.log(Hero.prototype.__proto__===Object.prototype); // true
console.log(hero.__proto__.__proto__===Object.prototype); //true
