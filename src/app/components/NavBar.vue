<template>
  <div>
    <p>I am the NavBar component</p>
    <button @click='renderMap()'>Tree</button>
    <button @click='renderMetrics()'>Web Metrics</button>
    <button @click='logMap()'>Console Log Map</button>
    <button @click='logWebVitals()'>Log Web Vitals</button>
  </div>
</template>

<script>
import {getCLS, getFID, getLCP} from 'web-vitals';
export default {
  name: "Navbar",
  methods: {
    renderMap() {
      this.$emit('renderMap')
    },
    renderMetrics() {
      this.$emit('renderMetrics')
    },
    logMap() {
      console.log('window:', window);
    //   console.log('runtime:', chrome.runtime);
    //   console.log('manifest:', chrome.runtime.getManifest());
    //   console.log('background page:', chrome.runtime.getBackgroundPage());
    // console.log('mapped:', chrome.window.__VUE_DEVTOOLS_INSTANCE_MAP__);
    console.log('inspected windows:', chrome.devtools.inspectedWindow);
    },
    logWebVitals() {
      getCLS(console.log);
      getFID(console.log);
      getLCP(console.log);
    }
  }
}
</script>