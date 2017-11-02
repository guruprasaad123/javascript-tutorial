let animal={
  name:'king kong',

};

let obj= Object.create(animal,{
  toString(){
  return "the elements are "+this.toString();
},

});

console.log(obj);
console.log(obj.name);
console.log(Object.is(Object.getPrototypeOf(obj),animal)); // sameas  obj.__proto__
console.log('Before : '+obj.__proto__);
console.log(Object.setPrototypeOf(obj,{}));
console.log('after : ',`${obj.__proto__}`);
console.log(obj);
