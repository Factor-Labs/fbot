
function say_hello() {
   chrome.extension.getBackgroundPage().console.log('Very much hello world. ');
}

export {say_hello};
