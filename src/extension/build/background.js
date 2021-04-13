chrome.runtime.onConnect.addListener(function (devToolsConnection) {
  // assign the listener function to a variable so we can remove it later
  let devToolsListener = function (message, sender, sendResponse) {
    // Inject a content script into the identified tab
    chrome.tabs.executeScript(message.tabId,
      { file: message.scriptToInject });
  }
  // add the listener
  devToolsConnection.onMessage.addListener(devToolsListener);
  devToolsConnection.onDisconnect.addListener(function () {
    devToolsConnection.onMessage.removeListener(devToolsListener);
  });
});

/////////////////////////// New Actual Data \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Create an object to store tabs information in
const tabsObj = {};

// Listens for messages from content_script
chrome.runtime.onMessage.addListener((req, sender) => {
  console.log("Reqeust and Sender \n", req, sender);

  if (req.name) {
    tabsObj[req.name] = req.value;
    console.log(tabsObj);
  }
});
