<template>
  <div>
    <Map v-if="isMapView" />
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
    isMapView: Boolean
  }
}
</script>