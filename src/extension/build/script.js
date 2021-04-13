window.addEventListener('keydown', () => {
  function getMap(c, output = { children: [] }) {
  if (!c.$children) {
    return output;
  }
  output.name = c.$vnode.tag;
  c.$children.forEach((child) => output.children.push(getMap(child)));
  return output;
}
  let map = getMap(window.__VUE_DEVTOOLS_INSTANCE_MAP__.get('1:3'))
  console.log("cloned map:", map)
  window.postMessage({
    map: map,
    source: 'kangaVUE',
    id: 'filteredMap'
  }, '*')
  // chrome.storage.sync.set(
  //   {currTab: window.__VUE_DEVTOOLS_INSTANCE_MAP__}, () => {console.log("stored on", currTab)}
  //   )
});