
var WebSocket = require('faye-websocket');
var http = require('http');
var fs = require('fs');


var server = http.createServer();

var castSource;
var receivers = [];
var messages = [];

server.on('upgrade', function(request, rawSocket, body) {
    if (WebSocket.isWebSocket(request)) {
        var ws = new WebSocket(request, rawSocket, body);

        if (request.url == "/cast") {
            // new source for casting.
            console.log('new cast session.');
            if (castSource) {
                console.log('closing existing cast source');
                castSource.close();
                messages = [];
            }

            castSource = ws;

            // Maybe sent a reset message ?
            ws.onmessage = function(event) {
                // event is of type MessageEvent https://html.spec.whatwg.org/multipage/comms.html#messageevent
                console.log('message received. now at ' + messages.length + ' . sending to ' + receivers.length);
                receivers.forEach(function(receiver) {
                    receiver.send(event.data);
                });
                messages.push(event.data);
            }

            ws.onclose = function () {
                console.log('closing cast session.');
                messages = [];
                castSource = null;
                ws = null;
            }
            console.log(' new cast session created.');
        }

        if (request.url == "/connect") {
            // new receiver.
            receivers.push(ws);
            console.log('Receiver opened, now at ' + receivers.length + ' sending ' +  messages.length + ' messages.');
            ws.send(JSON.stringify(messages));
            ws.onclose = function () {
                var index = receivers.indexOf(socket);
                receivers.splice(index, 1);
                console.log('receiver closed. now at ' + receivers.length);
            };
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
