// import Vue from 'vue';

// const app = new Vue({
//   el: '#vue-root',
//   data: {
//     message: 'Hello Vue!',
//   },
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log('index.js has been triggered!!!');
//   const NAME = 'Bobby Schmurda';
//   const rootApp = document.getElementById('app');
//   rootApp.innerHTML = `<p>Hello, ${NAME}</p>`;
// });

import Vue from 'vue';
import App from './App.vue';
import './styles/styles.css';

import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts);

new Vue({
  el: '#app',
  data:{
    treemap: {},
  },
  render: h => h(App)
});