// nodejs-gcloud-docker-kubernets
var http = require('http');
var handleRequest = function(request, response) {
    console.log('Received request for url ' + request.url);
    response.writeHead(200);
    response.end('Hello World!');
};

var www = http.createServer(handleRequest);
var port = 8080
console.log('nodejs-gcloud-docker-kubernets listening on port '+ port);
www.listen(port);