chrome.runtime.onConnect.addListener((function(e){console.log("in background");let n=function(e,n,o){chrome.tabs.executeScript(e.tabId,{file:e.scriptToInject})};e.onMessage.addListener(n),e.onDisconnect.addListener((function(){e.onMessage.removeListener(n)}))}));