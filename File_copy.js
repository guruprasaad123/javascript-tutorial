let fs = require('fs');
let readstream =fs.createReadStream(__dirname+'/index.html',{encoding:'utf8',highWaterMark:1024}); // highWaterMark is size of readable chunk that can be read.

let writestream = fs.createWriteStream(__dirname+'/index_copy.html',{encoding:'utf8'}); // file not exists , creates one

readstream.on('readable',()=>{
 // buffer.setEncoding('utf8');

 let buffer=readstream.read();
 if(buffer)
    {
 global.proto=buffer.length;
writestream.write(buffer,function(){
    console.log(`written ${global.proto}KBs of data `);
});
    }
})


/*
also as 
readstream.on('data',(buffer)=>{

 writestream.write(buffer);
})



*/