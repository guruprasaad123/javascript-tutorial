
 function parse(string){

   if(string===null)
   {
       return false;
   }
   else if(string instanceof String)
   {

       return JSON.parse(string,(key,value)=>{

         console.log(key,value);
       });
   }
   else if(string instanceof Boolean)
   {
    return new TypeError('GOT Boolean instead of String');
   }
   else if(string instanceof Number)
   {
       return new TypeError('GOT Number instead of String');
   }
   else if(string instanceof Array)
   {
       return new TypeError('GOT Array instead of String');
   }
   else if(string instanceof Object)
   {
    return new TypeError('Already an Object');
   }
   }

 function stringify(object)
{
 if(object instanceof Object)
 {
     return JSON.stringify(object);
 }
 else if(object instanceof Boolean)
   {
    return new TypeError('GOT Boolean instead of Object');
   }
   else if(object instanceof Number)
   {
       return new TypeError('GOT Number instead of Object');
   }
   else if(object instanceof Array)
   {
       return new TypeError('GOT Array instead of Object');
   }
   else if(object instanceof String)
   {
    return new TypeError('Already an String');
   }
}


 function localStore(KEY,data)
{

const string = stringify(data);

window.localStorage.setItem(KEY,string);
return true;
}

 function localFetch(KEY)
{
 const data = window.localStorage.getItem(KEY);
 if(data === null)
 return null;
 else{
      const object = parse(data);
      console.log(object);
      return object;
 }

}


let local = localFetch('test');

if(local===null)
{
  localStore('test',{type:'admin',state:'true'})
}
else {
  local['browse']=false;
  localStore('test',local);
}
