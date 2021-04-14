// chrome.runtime.onConnect.addListener(function (devToolsConnection) {
//   // assign the listener function to a variable so we can remove it later
//   let devToolsListener = function (message, sender, sendResponse) {
//     // Inject a content script into the identified tab
//     chrome.tabs.executeScript(message.tabId,
//       { file: message.scriptToInject });
//   }
//   // add the listener
//   devToolsConnection.onMessage.addListener(devToolsListener);
//   devToolsConnection.onDisconnect.addListener(function () {
//     devToolsConnection.onMessage.removeListener(devToolsListener);
//   });
// });


//////////LISTENER CODE///////////////////
var connections = {};

chrome.tabs.query({active: true, currentWindow:true}, function(tabs)
{console.log('backgroundjs tabs check:', tabs)

});

chrome.runtime.onConnect.addListener(function (port) {

    var extensionListener = function (message, sender, sendResponse) {

        // The original connection event doesn't include the tab ID of the
        // DevTools page, so we need to send it explicitly.
        if (message.name == "init") {
          connections[message.tabId] = port;
          console.log('message.tabId background.js ln 27 = ', message.tabId)
          return;
        }

	// other message handling
    }

    // Listen to messages sent from the DevTools page
    port.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(function(port) {
        port.onMessage.removeListener(extensionListener);

        var tabs = Object.keys(connections);
        for (var i=0, len=tabs.length; i < len; i++) {
          if (connections[tabs[i]] == port) {
            delete connections[tabs[i]]
            break;
          }
        }
    });
});
// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Messages from content scripts should have sender.tab set
    if (sender.tab) {
      var tabId = sender.tab.id;
      if (tabId in connections) {
        console.log('conexios', connections)
        let msg = {...request, tabId}
        console.log('msg from backgroundjs ln58:', msg)
        connections[tabId].postMessage(msg);
      } else {
        console.log("Tab not found in connection list.");
      }
    } else {
      console.log("sender.tab not defined.");
    }

    return true;
});

/////////////////////////// New Actual Data \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Create an object to store tabs information in
// const tabsObj = {};

// // Listens for messages from content_script
// chrome.runtime.onMessage.addListener((req, sender) => {
//   console.log("Reqeust and Sender \n", req, sender);

//   if (req.name) {
//     tabsObj[req.name] = req.value;
//     console.log(tabsObj);
//   }
// });
