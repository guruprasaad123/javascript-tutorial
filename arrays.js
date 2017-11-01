let array=[1,'one',{'one':1}]; // alt = new Array(1,'one',{'one':1});
/*
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 𠌱, a rare chinese hieroglyph (long unicode)
alert( "\u{1F60D}"); // a smiling face sumbol (another long unicode)

*/

/*
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
*/
console.log(array);
let index = array.length;
console.log('poping the elements '+"\u00A9");
while(index--)
{

  console.log(array.pop());
}
console.log("The result... : "+array);
array=new Array(1,'one',{'one':1});
array.unshift("I");// adds at beginning , by moving the index  , elements right
index=array.length;
delete array[0];
while(index--)
{
  console.log(array.shift()); //deletes the elements at first and returns by moving the index , elements left
}
