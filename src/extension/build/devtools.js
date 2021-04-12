chrome.devtools.panels.create('oVUElord', null, 'panel.html', () => {});
let backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
chrome.runtime.onMessage.addListener((message, callback) => {
  if (message == "runContentScript"){
    chrome.scripting.executeScript({
      file: 'contentScript.js'
    });
  }
});});

// Relay the tab ID to the background page
chrome.runtime.sendMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: "content_script.js"
});