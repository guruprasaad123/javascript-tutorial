'use strict';
var getYoutubeSubtitles = require('@joegesualdo/get-youtube-subtitles-node');

let videoId = '5Wiio4KoGe8'

getYoutubeSubtitles(videoId,{type: 'auto'})
.then(subtitles => {
  console.log('the log : '+subtitles)
})
.catch(err => {
  console.log('the error : '+err)
})
