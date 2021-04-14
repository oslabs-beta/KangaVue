<template>
  <div>
    <p>I am main container component</p>
      <Map v-if="isMapView" :treex="treex" />
    <web-metrics v-else/>
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