var https = require('https');

console.log("i did it")

var options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'

};
var callback = function(response){
    console.log("In response handler call back");

    response.on('data' , function(chunk){
        console.log('[--CHUNK OF LENGTH ' + chunk.length + ' --]');
        console.log(chunk.toString());
    });

    console.log("'response : " , response)

}
console.log("I m about to make the request;");
https.request(options, callback).end();

console.log("Ive made the request!!");


