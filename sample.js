let animal = {
  eat() {
    this.full = true;
  }
};
console.log(animal.__proto__);
let rabbit = {
  __proto__: animal
};

console.log(rabbit.__proto__);
