let arr=[56,90,-1 ,9,4e+10];

console.log( 'max of '+arr+' is : '+Math.max(...arr));// spread operator
 //console.log( 'max of 56,90,-1 ,9,4e-10 is : '+Math.max(56,90,-1 ,9,4e-10)); // rest operator

 show(56,90,-1 ,9,4e-10);



 function show(...args) // rest operator
 {
     array=Array.from(args);
     for(x of arguments) // same as array / args
    process.stdout.write(x+'\t');
 }