const {getCLS, getFID, getLCP} = require('web-vitals')

window.addEventListener('keydown', () => {
  console.log('window from script:', window)
   getCLS(console.log);
    getFID(console.log);
  getLCP(console.log);

})