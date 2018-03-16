let array = new Array();
for(let i=0;i<3;i++)
array.push(function(){return i;});
i=0;
console.log(array[0]()  );
