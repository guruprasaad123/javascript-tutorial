let fs = require('fs');
let readstream =fs.createReadStream('./app.json',{encoding:'utf8',highWaterMark:16*1024});

readstream.on('data',(buffer)=>{
 // buffer.setEncoding('utf8');

 
  console.log(buffer.length);
  console.log(buffer.toString());
  
})
