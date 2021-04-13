chrome.devtools.panels.create('oVUElord', null, 'panel.html', () => {});

var backgroundPageConnection = chrome.runtime.connect({
    name: "panel"
});

backgroundPageConnection.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});

// let backgroundPageConnection = chrome.runtime.connect({
//     name: "devtools-page"
// });

backgroundPageConnection.onMessage.addListener(function (message) {
chrome.runtime.onMessage.addListener((message, callback) => {
  if (message == "runContentScript"){
    console.log("message devtools ln 19:", message)
    chrome.scripting.executeScript({
      file: 'content_script.js'
    });
  }
});});


// // Relay the tab ID to the background page
// chrome.runtime.sendMessage({
//     tabId: chrome.devtools.inspectedWindow.tabId,
//     scriptToInject: "content_script.js"
// });

