function count(){
    let counter=0;
    return function(){
        return ++counter;
    }
};

let counter1=count();
let counter2=count();
console.log(counter1());
console.log(Object.hasOwnProperty(counter1));
console.log(counter2());