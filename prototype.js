let animal={
  species : '',
  genera :'',
  roar:true,
  run()
  {
    console.log('run');
  },
  walk()
  {
    console.log('walk');
  },
 
  current()
  {
    console.log(this);
  }
};



let mammel ={
  feed : true,
__proto__:animal,  // inherits animal as its prototype
};
// also mammel.__proto__=animal;
delete mammel.roar;
mammel.species='animo';
mammel.genera ='';
mammel.run();
mammel.walk();
mammel.current();
