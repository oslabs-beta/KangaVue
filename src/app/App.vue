<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"></router-link><router-link to="/about"></router-link>
    </div>
    <router-view />
    <navbar @renderMetrics="isMapView = false" @renderMap="isMapView = true" @setTree="setTree"/>
    <main-container :isMapView="isMapView"/>
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
      console.log('localstorage.treemap:', localStorage.treemap)
      this.treemap = localStorage.treemap
    }
  },
   data() {
    return {
      isMapView: false,
      treemap: undefined
    }
  }
};
</script>
<style>
  #app{
    margin: 0%;
  }
</style>