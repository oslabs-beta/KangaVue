<template>
  <div>
    <p>I am the NavBar component</p>
    <button @click='renderMap()'>Tree</button>
    <button @click='renderMetrics()'>Web Metrics</button>
    <button @click='setTree()'>Set Tree</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    renderMap() {
      this.$emit('renderMap')
    },
    renderMetrics() {
      this.$emit('renderMetrics')
    },
    setTree() {
      // console.log("localstorage:", window.localStorage)
      // this.$root.$emit('localStorage', window.localStorage)
      this.$emit('setTree')
    },
  },
  mounted: () => {
  
    
    // chrome.runtime.onConnect.addListener(function(port) {
    //   console.assert(port.name == "content_script / NavBar");
    //     port.onMessage.addListener(function(msg) {
    //       console.log("message recieved on Nav Bar" + msg);
    //     });
    // });
  },
}
</script>