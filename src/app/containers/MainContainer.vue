<template>
  <div>
    <p>I am main container component</p>
      <Map v-if="isMapView" :treex="treex" />
    <div v-else class="webMetricContainer">
      <web-metrics webMetricName="LCP" :webMetricValue="LCP"/>
      <web-metrics webMetricName="TTFB" :webMetricValue="TTFB"/>
      <web-metrics webMetricName="FID" :webMetricValue="FID"/>
      <web-metrics webMetricName="FCP" :webMetricValue="FCP"/>
      <web-metrics webMetricName="CLS" :webMetricValue="CLS"/>
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
  },
  data(){
    return {
      LCP: localStorage.LCP,
      TTFB: localStorage.TTFB,
      FID: localStorage.FID,
      FCP: localStorage.FCP,
      CLS: localStorage.CLS,
    }
  }
}
</script>