<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Hello Earth</router-link>|<router-link to="/about">World</router-link>
    </div>
    <router-view />
    <Navbar />

  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>