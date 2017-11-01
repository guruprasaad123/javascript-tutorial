
let num= 2e+10; // 64 bit number
let num1=1.34e-6; // after 1e-6 it gets displayed as 1e-n


let hex=0x21ff; // b is binary , x is hex , o is octal ,32 bit is n
let radix_32 = (1000201).toString(32); // .. use on numbers like 1000201..toString(n)
let double =124.231;
console.log('the Original double is : '+double);
for( i=0 ;i<5;i++)
console.log("the double fixed to "+i+" is : "+double.toFixed(i));

console.log('The radix 32 is : '+radix_32);
console.log('The hex is : '+hex);
console.log("The num converted to hex : "+num.toString(16));

console.log('The num1 : '+(num1));

console.log('The num1 after floor : '+Math.floor(num1));
console.log(Number(Infinity));

console.log('Number(\'100cm\') is : '+Number('100cm'));
console.log('parseInt(\'100px\') is : '+parseInt('100px'));
console.log('parseInt(\'12.2.2em\')  is : '+parseInt('12.2.2em'));
console.log('parseInt(\'12.2.2\')  is : '+parseInt('12.2.2'));
console.log('parseInt(\'ff\',16) is : '+parseInt('0xff',16)); // same as 0xff 
