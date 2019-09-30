
var receiverUrl = "wss://localhost:8080/connect";

receiverUrl = "wss://astra-fbot.appspot.com/connect";

var socket = new WebSocket(receiverUrl);

var closeAttempts = 0;

var events = [];

var recvEventObj = undefined;
var parse1 = undefined;
var parse2 = undefined;

var rrwebInstance = undefined;

function playEvents() {
    if (!rrwebInstance) {
        rrwebInstance = new rrwebPlayer({
            target: document.body, // customizable root element
            data: {
                events,
                autoPlay: true,
            },
        });
    }

}

socket.onmessage = function(event) {
    // var msg = JSON.parse(event.data);
    let textArea = document.getElementById('textArea');
    console.log("Received event data: " + event.data);
    parse1 = JSON.parse(event.data);
    console.log("parse1: " + parse1);
    // recvEventObj = JSON.parse(parse1["castEvents"]);
    console.log("Message type: " + parse1.type);
    console.log("Message length: " + parse1.length);
    console.log("Events list: " + parse1.events);
    recvEventObj = parse1.events;
    console.log("parse2:" + recvEventObj);
    // let tmpEvents = recvEventObj.castEvents;
    console.log("before events length:" + events.length);
    events.push.apply(events, recvEventObj);
    //if (textArea !== undefined) {
    //    textArea.innerText = event.data;
    //}
    console.log("after events.length :" + events.length);
    if (events.length > 100) {
        playEvents();
    }
}

socket.onclose = function() {
    closeAttempts ++;
    if (closeAttempts < 3) {
        socket = new WebSocket(receiverUrl);
    }
}