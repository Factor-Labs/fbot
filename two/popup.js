let newCast = document.getElementById('newCast');
let connectCast = document.getElementById('connectCast');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });


newCast.onclick = function(element) {
  /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    }); */
    var castId = "1234"; // TODO: Make this random.
    sendCastCmd("newCast", castId);
  };

connectCast.onclick = function(element) {
  /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    }); */
  var castId = "1234"; // TODO: Make this random.
  chrome.tabs.create({ url: chrome.extension.getURL('factor.html')});
};

function sendCastCmd(command, id) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currTab = tabs[0];
    if (currTab) { // Sanity check
      // send message to tab.
      chrome.tabs.sendMessage(tabs[0].id, {cmd: command, castId: id}, function(response) {
      console.log("Got response :" + response.result);
  });
    }
  });
}
