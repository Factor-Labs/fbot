// Content.js Content script for the Factor One Chrome Extension.


// const script = document.createElement('script')
// script.setAttribute('type', 'module')
// script.setAttribute('src', chrome.extension.getURL('rrweb.js'))
// const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement
// head.insertBefore(script, head.lastChild)
let chatbotEnabled = false;

function injectChatbox() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.className = 'play-chatbot';
  div.setAttribute("style", "color:red; border: 1px solid blue;");
  chrome.runtime.sendMessage({cmd: "read_file"}, function(html){
  $(".play-chatbot").html(html);
  $(".play-chatbot").hide();
  });
}

//injectChatbox();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.cmd == "newCast") {
      newCast(request.castId);
      sendResponse({result: "success"});
      //chrome.runtime.sendMessage({cmd: "newCastBg"});

    } else if (request.cmd == "connectCast") {
      connectCast(request.castId);
      sendResponse({result: "success"});
    } else {
      console.log("Unknown message received from popup:" + request);
      sendResponse({result: "failure"});
    }
  });



console.log("console js script started !");

function toggleChatbot() {
   chatbotEnabled = ! chatbotEnabled;
   if (chatbotEnabled) {
     $(".play-chatbot").show();
   } else {
     $(".play-chatbot").hide();
   }
}

function captureDomSnapshot() {
  console.log(myTestObject.sayHello());
}

var serverUrl = "wss://localhost:8080/cast";

serverUrl = "wss://astra-fbot.appspot.com/cast";

let castEvents =[];
let stopFuncton = function() {};

let ws = undefined;
let wsTimer = undefined;

function sendEvents(ws) {
  console.log("Sending events to server: " + castEvents.length + " at " + Date.now());

  var msg = {
    type: "events",
    length: castEvents.length,
    events: castEvents
  };

  const data = JSON.stringify(msg);
  console.log("Sending :" + data);
  castEvents = [];
  ws.send(data);
}

function newCast(castId) {
  alert("Starting cast with ID: " + castId);
  ws = new WebSocket(serverUrl);
  
  stopFunction = rrwebRecord({
    emit(event) {
      // push event into the events array
      castEvents.push(event);
      console.log("Pushing event of type:" + typeof event);
    },
  });

  ws.onopen = function() {
    var count = 0;
    //ws.send(" some message");
    //setInterval(function () { count ++; ws.send(" message number " + count);}, 100);
    wsTimer = setInterval(sendEvents(ws), 1500);
  }

  ws.onerror = function(error) {
    console.log("WebSocket error: " + error.error);
    alert("websocket error, closing socket.");
    clearInterval(wsTimer);
    stopFunction();
  }

  ws.onclose = function() {
    console.log("Websocket: closing");
    alert("Websocket error, closing socket.");
    stopFunction();
    clearInterval(wsTimer);
  }
}

function connectCast(castId) {
  alert("Connecting to cast with ID: " + castId);
  chrome.tabs.create({ url: chrome.extension.getURL('factor.html')});
}
