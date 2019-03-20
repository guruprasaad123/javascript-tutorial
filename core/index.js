let structure = require('./structure.json');
let variableHash = require('./variablehash');
let fs = require('fs');

const Model = Modelize(structure,{});

WriteToJSON(Model);

function WriteToJSON(data)
{
    let fileStream = fs.createWriteStream(__dirname+'/data.json',{encoding:'utf-8'});

    
if(data)
{
    data= JSON.stringify(data);
fileStream.write(data,function(){
    console.log('data written');
});
}

}


function generateData(structure,referral)
{
    const username = structure.name+'@crypto';
    const maidId = username+'.com';
    const reffered= [];
    const referralId = Hash(referral.toString('utf-8'));
    for( X of structure.child)
    {
       const stringHash= Hash(X.name);
       reffered.push(stringHash);
    }
 
    
    let object ={
       username,
       maidId,
       reffered,
       referral,
       referralId,
       createdAt:new Date().getTime(),
       active:true,
       lastActive:'seen',
       currency:'IND',
       credit:2500
            };

    return object;
}

function Hash(name)
{
  const string =  variableHash(28,name,'utf-8').toString('utf-8');
  return string;
}


function Modelize(structure,object,Root=false)
{

    // "username":"guru@crypto",
    // "maidId":"guru@crypto.com",
    // "referred":["c74b3b519337dc9a089e7521da80","785a57bf61043c3183ecac6bbcd8","582140f3566256b4c8944e230c61"],
    // "referral":"isRoot",
    // "referralId":"",
    // "createdAt":"",
    // "active":true,
    // "lastActive":""
   const hash= variableHash(28,structure.name,'utf-8').toString('utf-8');
   let data ={};
   if(!Root)
   {
      data=   generateData(structure,'isRoot');
   }
   data=generateData(structure,Root);
 //console.log(data);
    object[hash]=data


if(structure.child.length===0)
return object;

for(X of structure.child)
{
 object = Modelize(X,object,hash);
}

return object;
}
