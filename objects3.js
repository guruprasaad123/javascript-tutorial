// Same Animal as before
function Animal(name) {
  this.name = name;
}

// All animals can eat, right?
Animal.prototype.eat = function() {
  console.log(this.name + ' eats.');
};

// Same Rabbit as before
function Rabbit(name) {
  this.name = name;
}
console.log('before  \u00A9');
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.__proto__);

Rabbit.prototype.jump = function() {
  console.log(this.name + ' jumps!');
};
// setup the inheritance chain
console.log('after  \u00A9');
Rabbit.prototype.__proto__ = Animal.prototype; // (*)

console.log(Rabbit.prototype);
console.log(Rabbit.prototype.__proto__);

let rabbit = new Rabbit("White Rabbit");
rabbit.eat(); // rabbits can eat too
rabbit.jump();
