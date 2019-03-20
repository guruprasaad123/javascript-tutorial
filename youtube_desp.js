module.exports=async function(results,fs,playlist=false,index=0)
{
results.title=  results.title.replace('?','');
results.title = results.title.replace('|','');
if(playlist)
{
if (!fs.existsSync('./videos/'+playlist)){
 await fs.mkdirSync('./videos/'+playlist);
}
}

let path = playlist? __dirname+`/videos/${playlist}/${results.title}[${index}].md`:
(__dirname+`/videos/${results.title}.md`);
     let writable = fs.createWriteStream(path,{encoding:'utf8'});

     writable.write(results.description,function(){
       console.log('written ',results.title);
     });
     console.log(results.description);

}
