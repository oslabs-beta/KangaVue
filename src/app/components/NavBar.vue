<template>
  <div id='navBarDiv'>
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
  
<style>
  #navBarDiv {
    background-color: #262323;
    border-style: solid;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border-color: red; */
  }
  button {
    height: 100%;
    width: 60px;
    background-color: #262323;
    color: white;
    overflow: hidden;
    outline: none;
    border: none;
  }
  button:hover {
    background-color: #0EA47A;
  }
</style>