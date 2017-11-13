let map = new Map([
  [3,'three']
]);
/*
map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

map.set(1,'one');
map.set('two',2); // can use objects as key also

console.log(map);

console.log('The keys are ... ');
for (val of map.keys())
console.log(val);

console.log('The values are ... ');
for (val of map.values())
console.log(val);

let obj= {
  name:'solo',
  id : 1
}
 let  map1 = new Map(Object.entries(obj));

 console.log(obj);
