<template>
<div id="chart">
        <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>
<script>
export default {
  name: 'WebMetrics',
  data: () => ({
          series: [70],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '30%',
                }
              },
            },
            labels: ['Cricket'],
          },
        })
}
</script>

<style scoped>
</style>


