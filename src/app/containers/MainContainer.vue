<template>
  <div id='mainContainerDiv'>
      <Map v-if="isMapView" :treex="treex" />
    <div v-else class="webMetricContainer">
      <web-metrics name="LCP"/>
      <web-metrics name="SFX"/>
    </div>
    
  </div>
</template>

<script>
import Map from '../components/Map.vue'
import WebMetrics from '../components/WebMetrics.vue'

export default {
  components: { Map, WebMetrics },
  name: 'MainContainer',
  props: {
    isMapView: Boolean,
    treex: Object
  }
}
</script>

<style>
  
</style>