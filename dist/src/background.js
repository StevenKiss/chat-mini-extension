(function(){"use strict";console.log("Background service worker running."),chrome.runtime.onMessage.addListener((e,n)=>{e.type==="PING"&&chrome.runtime.sendMessage({type:"PONG"})})})();
