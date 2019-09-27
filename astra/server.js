
var WebSocket = require('faye-websocket');
var http = require('http');
var fs = require('fs');


var server = http.createServer();

var projector;
var receivers = [];

server.on('upgrade', function(request, rawSocket, body) {



});
