
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function hash(arr)
{
  let set= new Set();
  for(val of arr)
  {
    val=val.toLowerCase().split('').sort().join('');
    set.add(val);
  }
return set;

}


function clean(arr)
{
  set=hash(arr);
  let cleaned = [];
  for(val of arr)
  {
    let res=val.toLowerCase().split('').sort().join('');
    if(set.has(res))
    {
      set.delete(res);
      cleaned.push(val);
    }
  }
  return cleaned;
}
console.log(clean(arr));
