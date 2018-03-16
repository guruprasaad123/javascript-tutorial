let array = new Array();
for(var i=0;i<3;i++)
array.push(function(){return i;});

process.stdout.write(array[0]);
