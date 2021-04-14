chrome.devtools.panels.create('KangaVue', 'assets/oVUElord_logo.png', 'panel.html', () => {});

var backgroundPageConnection = chrome.runtime.connect({
    name: "panel"
});

let frontEndConnection = chrome.runtime.connect({
    name: "frontEnd"
});

backgroundPageConnection.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});

// let backgroundPageConnection = chrome.runtime.connect({
//     name: "devtools-page"
// });

backgroundPageConnection.onMessage.addListener(function (message,) {
chrome.runtime.onMessage.addListener((message, callback) => {
  if (message == "runContentScript"){
    chrome.scripting.executeScript({
      file: 'content_script.js'
    });
  }else
  if(message.id === 'filteredMap'){
    // console.log("backpagecon:", backgroundPageConnection)
    // console.log('frontendcon:', frontEndConnection)
    console.log("msg:", message)
    console.log("message.tabId:", message.tabId)
    localStorage.setItem('treemap', JSON.stringify(message.map))
    console.log("localstorage:", window.localStorage)
  }
});});


// // Relay the tab ID to the background page
// chrome.runtime.sendMessage({
//     tabId: chrome.devtools.inspectedWindow.tabId,
//     scriptToInject: "content_script.js"
// });

