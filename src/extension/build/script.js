window.addEventListener('keydown', () => {
  console.log('window from script:', window);
  let map = window.__VUE_DEVTOOLS_INSTANCE_MAP__
  let mapobj = Array.from(map.entries()).reduce((main, [key, value]) => ({...main, [key]: value}), {})
  mapobj = JSON.parse(JSON.stringify(mapobj))
  console.log("cloned map:", mapobj)
  window.postMessage({
    map: mapobj,
    source: 'kangaVUE'
  }, '*')
  // chrome.storage.sync.set(
  //   {currTab: window.__VUE_DEVTOOLS_INSTANCE_MAP__}, () => {console.log("stored on", currTab)}
  //   )
});