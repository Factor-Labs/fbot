/* Background.js script for the Factor Labs Chrome Extension */

/* Guide at: https://developer.chrome.com/extensions/background_pages */

 chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });

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
})

