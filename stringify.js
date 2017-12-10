let json ={
    name:'Guruprasaad',
    date:new Date(),
    id:Math.random(),
    new_date:function(){return new Date()}, // function is rejected ...?
   [ Symbol("name") ]:null,
set fullname(value='')
{
  if(value.length>5)
  this._name=value;
  else 
  return;
},
get fullname()
{
  return this._name;
}
 }; 
json.fullname='guru001';   // if fullname , _name is set correctly , it'll be available in json while stringify
console.log('Bfr : \n'+json.fullname);

json=JSON.stringify(json);

console.log('Afr : \n'+json);

json= JSON.parse(json);

console.log('parsing : '+ json); // functions are not available