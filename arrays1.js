let array= new Array();
array[0]=124;
array[1]='hello';

array[2]=123.45;
for(let arr in array)
console.log(arr);

for(let arr of array)
console.log(arr);
