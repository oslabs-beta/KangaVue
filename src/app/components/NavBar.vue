<template>
  <div id='navBarDiv'>
    <button class="treebtn" @click='renderMap()'><i class="fas fa-tree fa-lg"></i><div class="tooltip"><span class="tooltiptext">Component Tree</span></div></button>
    <button class="treebtn" @click='renderMetrics()'><i class="fas fa-stopwatch-20 fa-lg"></i><div class="tooltip"><span class="tooltiptext">Web Metrics</span></div></button>
    <button class="treebtn" @click='setTree()'><i class="fas fa-sync fa-lg"></i><div class="tooltip"><span class="tooltiptext">Set Tree</span></div></button>
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
    border-color: #262323;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 5px white;
    /* border-color: red; */
  }
  button {
    height: 100%;
    width: 120px;
    background-color: #262323;
    color: white;
    overflow: visible;
    outline: none;
    border: none;
  }
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltiptext {
    visibility: hidden;
    background-color: rgb(138, 250, 190);
    color: black;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 100;
    top: -25px;
    right: 100%;
  }

  .treebtn:hover .tooltiptext {
    visibility: visible;
  }
</style>