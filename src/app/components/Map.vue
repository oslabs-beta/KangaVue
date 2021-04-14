<template #behavior="{ on, actions }">
  <div class="pa-2">
    <h3 class="pb-2">Your map</h3>
    <tree
      :data="tree"
      node-text="name"
      radius="4px"
      layoutType="horizontal"
      duration="400"
      type="cluster"
      key="0"
    >
      <slot name="behavior" :on="on" :actions="actions"> </slot>
    </tree>
  </div>
</template>

<script>
import { tree, CollapseOnClick } from 'vued3tree';
export default {
  name: 'Map',
  components: {
    tree,
    CollapseOnClick,
  },
  props: {
    treex: Object
  },
  data (){
    console.log('treex:', this.treex)
    let newmap = JSON.parse(this.treex)
    console.log("newmap:", newmap)
    return {
      tree: newmap
    }
  },
  mounted: function(){
    console.log("mounted tree:", this.treex)
  },
  updated: function(){
      console.log("map rerendered")
  },
};
</script>
<style>
.pa-2 {
  max-width: inherit;
  height: 500px;
  border: 5px solid greenyellow;
}
</style>
