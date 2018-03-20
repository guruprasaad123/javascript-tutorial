

class stack{

constructor()
{
this.array=[];

}

add(value)
{
  this.array.push(value);
}

remove()
{
  this.array.pop();
}

print()
{
  for(let X of this.array)
  {
    console.log(`the element : ${X}`);    
  }
}

}
