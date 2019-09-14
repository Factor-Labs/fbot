// Content.js Content script for the Factor One Chrome Extension.


function injectChatbox() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.className = 'play-chatbot';
  div.setAttribute("style", "color:red; border: 1px solid blue;");
  chrome.runtime.sendMessage({cmd: "read_file"}, function(html){
  $(".play-chatbot").html(html);
  });
}

injectChatbox();

console.log("console js script started !");
