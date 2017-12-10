let anime,naruto;
naruto={
    episodes:500,
  category:anime,
    language:'english'
}, anime={
    type:'manga',
  name:naruto,

};
//naruto.category=anime;
//anime.name=naruto;
let json=JSON.stringify(anime,function replacer(key,value){
    console.log(`key : ${key} , value :${value}`);
    return value;
},3);
console.log(json);

/*
`{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}` 
*/