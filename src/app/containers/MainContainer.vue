<template>
  <div>
<<<<<<< HEAD
    <Map v-if="isMapView" />
    <web-metrics v-else/>
=======
    <p>I am main container component</p>
      <Map v-if="isMapView" :treex="treex" />
    <div v-else class="webMetricContainer">
      <web-metrics name="LCP"/>
      <web-metrics name="SFX"/>
    </div>
    
>>>>>>> 035265e3a7ab37aed7600e3d9f7e484254c02d10
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