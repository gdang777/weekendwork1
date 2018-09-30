var https = require('https');

console.log("i did it")

var options = {
    host: 'www.example.org',
    path: '/'

};
var callback = function(){
    console.log("In response handler call back");

}
console.log("I m about to make the request;");
https.request(options, callback).end();

console.log("Ive made the request!!");


