<template>
  <div id='mainContainerDiv'>
      <Map v-if="isMapView" :treex="treex" />
    <div v-else class="webMetricContainer">
      <web-metrics webMetricName="LCP" :webMetricValue="LCP" webMetricTitle="Largest Contentful Paint" webMetricDescription="Measures Loading Performance. Benchmark is less than 2500ms." :webMetricBenchmark="2500"/>
      <web-metrics webMetricName="TTFB" :webMetricValue="TTFB" webMetricTitle="Time to First Byte" webMetricDescription="Measures Time for first byte of information. Benchmark is less than 600ms" :webMetricBenchmark="600"/>
      <!-- <web-metrics webMetricName="FID" :webMetricValue="FID" webMetricTitle="First Input Delay" webMetricDescription="Measures Interactivity. Benchmark is less than 100ms" :webMetricBenchmark="100"/> -->
      <web-metrics webMetricName="FCP" :webMetricValue="FCP" webMetricTitle="First Contentful Paint" webMetricDescription="Measures time for page to render the first element of the DOM. There is currently no benchmark."/>
      <web-metrics webMetricName="CLS" :webMetricValue="CLS" webMetricTitle="Cumulative Layout Shift" webMetricDescription="Measures ratio of all unexpected layout shifts compared to all layout shifts. Benchmark is a ratio less than 0.1" :webMetricBenchmark="0.1"/>
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

<style>
  
</style>