const structure = require('./data.json');
let fs = require('fs');

function deModelize(structure,level,object,Root=false)
{

if(Root.reffered.length===0)
{
    return object;
}

if(!object[`level-${level}`])
{
    object[`level-${level}`]=[];
}


for(X of Root.reffered)
{
    let obj = {};
    obj[X]=structure[X];
    object[`level-${level}`].push(obj[X]);
   object =  deModelize(structure,level+1,object,structure[X]);
}

return object;

}

const deModeled = deModelize(structure,0,{},structure['Oz0sZ7jdOQUX5SZb45j2mi5mlrd2']);
//console.log('deModeled > ',deModeled);

WriteToJSON(deModeled);


function WriteToJSON(data)
{
    let fileStream = fs.createWriteStream(__dirname+'/demodel.json',{encoding:'utf-8'});

    
if(data)
{
    data= JSON.stringify(data);
fileStream.write(data,function(){
    console.log('data written');
});
}

}