let array=['hello','world','let','o'];
let removed=array.splice(0,2,'Elements','one','two');


console.log('the modified : '+array);
console.log('the removed : '+removed);
removed.splice(1,'good','help');
console.log(`the removed + modified : ${removed}`);
