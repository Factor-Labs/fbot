/* Background.js script for the Factor Labs Chrome Extension */

/* Guide at: https://developer.chrome.com/extensions/background_pages */

 chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });

var serverUrl = "ws://astra-fbot.appspot.com/cast";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "read_file") {
        $.ajax({
            url: chrome.extension.getURL("chatbot.html"),
            dataType: "html",
            success: sendResponse
        });
      console.log("Got request read_file.");
      return true;
    }

    if (request.cmd == "newCastBg") {
      newCast("1234");
    }

    if (request.cmd == "cast") {

    }
});

function newCast(castId) {
  alert("Starting cast with ID: " + castId);
  var ws = new WebSocket(serverUrl);
  ws.onopen = function() {
    var count = 0;
    ws.send(" some message");
    setInterval(function () { count ++; ws.send(" message number " + count);}, 500);
  }
  ws.onerror = function(error) {
    console.log("WebSocket error: " + error.error);
    clearInterval();
  }
  ws.onclose = function() {
    console.log("Websocket: closing");
  }
}

