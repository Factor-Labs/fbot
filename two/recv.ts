
var receiverUrl = "wss://localhost:8080/connect";

receiverUrl = "wss://astra-fbot.appspot.com/connect";

var socket = new WebSocket(receiverUrl);

var closeAttempts = 0;

socket.onmessage = function(event) {
    // var msg = JSON.parse(event.data);
    let textArea = document.getElementById('textArea');
    console.log("Received event data: " + event.data);
    if (textArea !== undefined) {
        textArea.innerText = event.data;
    }
}

socket.onclose = function() {
    closeAttempts ++;
    if (closeAttempts < 10) {
        socket = new WebSocket(receiverUrl);
    }
}