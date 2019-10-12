'use strict';
let Youtube = require('simple-youtube-api');
let description = require('./youtube_desp');
let fs= require('fs');
let args=process.argv;
process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;
if(args[2])
{
let exp =  /^https:\/\/www\.youtube\.com\/watch\?v\=\S{11}$/gi;
let link = new RegExp(exp);
let youtube = new Youtube('AIzaSyCN4DRqOav_BIvbX30nQO4G6vU9Ot1ZdCM');

  if(args[3]==='--playlist')
  {
    youtube.getPlaylistByID(args[2])
    .then(playlist => {
      if (playlist){
        playlist.getVideos().then( videos =>{
         videos.map( (video ,index) =>{
           console.log('Video => ',video.title,index);
           description(video,fs,playlist.title,index+1);
         } )
        }).catch(console.error)
        }
      else{
         console.log('playlist not found :(');
        }
    })
    .catch(console.error);
    return ;
  }
  if( args[2].match(link) )
  {
    console.log('youtube link found');
    youtube.getVideo(args[2])
    .then(results=>description(results,fs))
    .catch(err => {
      console.log(err);
    })
  }
  else {
    console.log( 'youtube link not found');
  }


}
else {
  console.log('Enter a youtube link/ID ');
}
