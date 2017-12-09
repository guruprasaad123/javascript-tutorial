let users={user:'140P34',id:56,date:new Date(),map:new Map()};
let {user,id,...rest}=users;
let mid,last;
( [,mid='mid',...last]=['hello','world','earth','moon'] ); // default values.

console.log(`the user : ${user} , id : ${id} , date : ${rest.date} , map : ${rest.map}`);
console.log(`Mid : ${mid} , last : ${last}`);
user_func(users);


function user_func({user:u='',id:i=0,...rest}) // incoming param : user param=default value ,
{
  console.log(`using function  : \n the user : ${u} , id : ${i} , date : ${rest.date} , map : ${rest.map}`);
}
