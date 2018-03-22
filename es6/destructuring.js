let array = [34,67,90];

let [first,...rest]=array;

console.log(first,rest);

let object ={
  first:'guru',
  last:'prasaad',
  set fullname(value){
    if(value.length > 6){
      this._fullname=value;
      return true;
    }
    else {
      return false;
    }
  },
  get fullname(){
    return this._fullname;
  }
}

{
  let { last:Newlast , first:Newfirst , fullname}=object;

  console.log(Newfirst,Newlast,fullname);

}
