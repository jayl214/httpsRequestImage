var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

       .on('error', function(err){
          throw err;
       })
       .on('response', function(response){
          console.log('DOWNLOADING IMAGE...')
          console.log( 'Status: ', response.statusMessage, '\n' + 'File Type: ' + response.headers['content-type']);
       })
       .on('end', function(){
        console.log('DOWNLOADING COMPLETE');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
