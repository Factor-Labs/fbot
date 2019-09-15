// Content.js Content script for the Factor One Chrome Extension.

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

injectChatbox();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.cmd == "toggle") {
      toggleChatbot();
      sendResponse({result: "success"});
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
