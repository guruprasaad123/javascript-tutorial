module.exports=function(results,fs)
{
results.title=  results.title.replace('?','');
results.title = results.title.replace('|','');
     let writable = fs.createWriteStream(__dirname+`/videos/${results.title}.md`,{encoding:'utf8'});

     writable.write(results.description,function(){
       console.log('written');
     });
     console.log(results.description);

}
