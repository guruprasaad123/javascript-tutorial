let getfunc= function(val=price,price=100){
  return val+price;
}

console.log(getfunc(40));

getfunc= new Function("val","price","return val+price");

console.log(getfunc(12,32));
