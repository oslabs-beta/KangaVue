let s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.type = "module"
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);