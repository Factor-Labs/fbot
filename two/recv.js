var receiverUrl = "ws://localhost:8080/connect";
var socket = new WebSocket(receiverUrl);
var closeAttempts = 0;
var textArea = document.getElementById('textArea');
socket.onmessage = function (event) {
    var msg = JSON.parse(event.data);
    console.log("Received event data: " + event.data);
    textArea.innerText = event.data;
};
socket.onclose = function () {
    closeAttempts++;
    if (closeAttempts < 10) {
        socket = new WebSocket(receiverUrl);
    }
};
