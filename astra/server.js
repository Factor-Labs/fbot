
var WebSocket = require('faye-websocket');
var http = require('http');
var fs = require('fs');


var server = http.createServer();

var projector;
var receivers = [];

server.on('upgrade', function(request, rawSocket, body) {
    if (WebSocket.isWebSocket(request)) {
        var ws = new WebSocket(request, rawSocket, body);

        if (request.url == "/cast") {
            // new source for casting.
        }

        if (request.url == "/connect") {
            // new receiver.
            receivers.push(ws);
        }

        ws.on('close', function(event) {
            console.log('close', event.code, event.reason);
            ws = null;
        });
    }

});

var fullHtml = "";

fs.readFile('index.html', function(err, indexHtml) {
    fullHtml = indexHtml;
    console.log("Read HTML:" + fullHtml);
});

server.on('request', function(request, response) {
    if (request.url == "/") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(fullHtml);
    }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

server.listen(PORT);
