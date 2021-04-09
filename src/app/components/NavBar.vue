<template>
  <div>
    <!-- <button v-on:click="{{log}}">Tree</button> -->
    <button @click='log'>Tree</button>
    <button>Web Metrics</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    log() {
      console.log('tree has been clicked')
    }
  }
}
</script>