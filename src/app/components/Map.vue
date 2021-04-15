<template #behavior="{ on, actions }">
  <div class="pa-2">
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
    //if(this.treex){
      console.log('treex:', this.treex);
      let newmap = JSON.parse(this.treex);
      console.log("newmap:", newmap);
      return {
        tree: newmap
      }
   // }
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
}
.treeclass .nodetree circle {
    fill: #00ffb8;
}
.treeclass .node--internal circle {
    cursor: pointer;
    fill: #13799c;
}
.treeclass .linktree {
  fill: none;
  stroke: #0ea47a;
  stroke-opacity: 0.4;
}
.treeclass .nodetree text {
    font: 15px sans-serif;
    cursor: pointer;
}
</style>
