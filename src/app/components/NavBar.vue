<template>
  <div>
    <p>I am the NavBar component</p>
    <button @click='renderMap()'>Tree</button>
    <button @click='renderMetrics()'>Web Metrics</button>
    <button @click='checkPort()'>Check Port</button>
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
    checkPort() {
      // port.onMessage.addListener(function(msg) {
      //   console.log("message recieved" + msg);
      // })
    },
  },
  mounted: () => {
    let port = chrome.runtime.connect({
    name: "Nav Bar"
});
    console.log('Nav Bar Mounted', port);
    port.onMessage.addListener(function(msg) {
      console.log("message recieved on Nav Bar" + msg);
    })
  }
}
</script>