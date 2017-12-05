let iterator ={
  elements:[3,4,'hello','fire']
};
let _iterator=Symbol.iterator;
iterator.__proto__[_iterator]=function(){
  return{
    length:this.elements.length,
    element:this.elements,
    next()
     {
       while(this.length--)
       {
         return {done:false,value:this.element[this.length]}
       }
       return {done:true};

     }
  }
};

let Iterator=iterator[_iterator](),stop=false;
while(!stop)
{
let res=  Iterator.next();
stop=res.done;
 stop ?'':console.log(res.value);

}
