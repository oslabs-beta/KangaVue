<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Hello From App</router-link><router-link to="/about"></router-link>
    </div>
    <router-view />
    <navbar @renderMetrics="isTreeView = false" @renderTreeTest="isTreeView = true"/>
    <main-container :isTreeView="isTreeView"/>
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
      isTreeView: false
    }
  }
};
</script>