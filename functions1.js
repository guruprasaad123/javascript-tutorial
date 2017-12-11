let func=function(say= function(name){})
{
console.log(say.name);
console.log(say.length);
}

func();


function counter()
{

    let counter=0;
    return function(){
    counter++;
       toString()
       {
           return counter; 
       }

    };
}

let counter1=counter();
//counter1()();
console.log();