<template>
  <div>
    <p>I am the NavBar component</p>
    <button @click='renderTree()'>Tree</button>
    <button @click='renderMetrics()'>Web Metrics</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    log() {
      console.log('tree has been clicked')
    },
    renderTree() {
      this.$emit('renderTreeTest')
    },
    renderMetrics() {
      this.$emit('renderMetrics')
    }
  }
}
</script>