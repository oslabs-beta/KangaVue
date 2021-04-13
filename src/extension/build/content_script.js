import { getTTFB, getLCP, getFID, getFCP, getCLS } from 'web-vitals';

let s = document.createElement('script');
s.src = chrome.runtime.getURL('script.bundle.js');
s.type = "module"
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

// Performance metrics being calculated by the 'web-vitals' api and
// sent as an object to background.js.
// To learn more about Chrome web vitals, see https://web.dev/vitals/.
const metrics = {};
const gatherMetrics = ({ name, value }) => {
  metrics[name] = value;

  chrome.runtime.sendMessage({
    type: 'performance:metric',
    name,
    value,
  });
};

// Functions that calculate web metric values.
getTTFB(gatherMetrics);
getLCP(gatherMetrics);
getFID(gatherMetrics);
getFCP(gatherMetrics);
getCLS(gatherMetrics);
