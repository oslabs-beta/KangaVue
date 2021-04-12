chrome.devtools.panels.create('oVUElord', null, 'panel.html', () => {console.log('panel create')});
let backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
});

// Relay the tab ID to the background page
chrome.runtime.sendMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: "content_script.js"
});