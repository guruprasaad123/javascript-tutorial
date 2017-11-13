let set = new Set(['hello',123]);
let obj={
  'name': 'gru'
};
set.add(obj);
console.log(set);
set.add(obj);  // replaces the prev
obj.id=1;
console.log(set);
set.delete(obj);
console.log(set);
