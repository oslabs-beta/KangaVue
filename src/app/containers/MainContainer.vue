<template>
  <div>
    <p>I am main container component</p>
    <tree v-if="isTreeView"/>
    <web-metrics v-else/>
  </div>
</template>

<script>
import Tree from '../components/Tree.vue'
import WebMetrics from '../components/WebMetrics.vue'

export default {
  components: { Tree, WebMetrics },
  name: 'MainContainer',
  props: {
    isTreeView: Boolean
  }
}
</script>