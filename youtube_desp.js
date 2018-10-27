module.exports=function(results,fs)
{
results.title=  results.title.replace('?','');
<<<<<<< HEAD
results.title = results.title.replace('|','');
=======
>>>>>>> 5dcb633ba0d3b280070abfa986a116266c10cdd7
     let writable = fs.createWriteStream(__dirname+`/videos/${results.title}.md`,{encoding:'utf8'});

     writable.write(results.description,function(){
       console.log('written');
     });
     console.log(results.description);

}
