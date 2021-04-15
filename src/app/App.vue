<template>
  <div id='mainDiv'>
    <!-- <div class="nav">
      <router-link to="/"></router-link><router-link to="/about"></router-link>
    </div>
    <router-view /> -->
    <navbar @renderMetrics="isMapView = false" @renderMap="isMapView = true" @setTree="setTree"/>
    <main-container :isMapView="isMapView" :treex="treex"/>
  </div>
</template>



<script>
import Navbar from "./components/NavBar.vue";
import MainContainer from './containers/MainContainer.vue';

export default {
  name: "App",
  components: {
    Navbar,
    MainContainer
  },
  methods: {
    setTree(){
    console.log("first tree:", this.treex);
    this.treex=localStorage.treemap; 
    console.log("updated tree:", this.treex);
    }
  },
   data() {
    return {
      isMapView: false,
      treex: undefined
    }
  }
};
</script>
<style>
  #mainDiv {
    height: 100%;
  }
</style>