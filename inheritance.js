function animal(species , genera)
{
  this.species=species;
  this.genera = genera;

}

function survive()
{
console.log('All species will survive....');
};

animal.prototype.adapt=function(func)
{
  func();
};

let dog=new  animal("Dog","mammel");
dog.adapt(survive);

let cat = new animal('cat','mammel');
cat.adapt(survive);


 console.log(dog.adapt===cat.adapt);
