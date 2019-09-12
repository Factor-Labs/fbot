/* Background.js script for the Factor Labs Chrome Extension */

/* Guide at: https://developer.chrome.com/extensions/background_pages */

 chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });



