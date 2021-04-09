<template>
  <div>
    <p>I am the NavBar component</p>
    <button @click='renderMap()'>Tree</button>
    <button @click='renderMetrics()'>Web Metrics</button>
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
    }
  }
}
</script>