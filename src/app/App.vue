<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"></router-link><router-link to="/about"></router-link>
    </div>
    <router-view />
    <navbar @renderMetrics="isMapView = false" @renderMap="isMapView = true"/>
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
   data() {
    return {
      isMapView: false
    }
  }
};
</script>
<style>
  #app{
    margin: 0%;
  }
</style>