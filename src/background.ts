console.log('Background service worker running.');

// Example: listen for messages from popup
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === 'PING') {
    chrome.runtime.sendMessage({ type: 'PONG' });
  }
}); 