let game={
  name :'',
 toString :function (){
return "obj";
},
valueOf :function (){
return 7;
},
get fullname()
{
  return `${this.name}`;
},
set fullname(val)
{
  if(this.name.length > 5)
  this.name = val;
  else {
     console.log('name\'s too short,  chose wise '+"\u00A9");
  }
}


};


game.fullname='guru';
console.log(game.fullname);
for(let props in game)
{
  console.log(props);
}
