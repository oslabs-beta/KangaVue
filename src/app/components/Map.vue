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
// import * as d3 from "d3";
import { tree, CollapseOnClick } from 'vued3tree';
// function getMap(c, output = { children: [] }) {
//   if (!c.$children) {
//     return output;
//   }
//   output.name = c.$vnode.tag;
//   c.$children.forEach((child) => output.children.push(getMap(child)));
//   return output;
// }
//console.log('mapped out:', getMap(window.__VUE_DEVTOOLS_INSTANCE_MAP__));
// console.log('window:', window);
// console.log('mapped:', window.__VUE_DEVTOOLS_INSTANCE_MAP__);
export default {
  name: 'Map',
  components: {
    tree,
    CollapseOnClick,
  },
  data() {
    return{
      tree: localStorage.treemap
    }
  }
};
</script>
<style>
.pa-2 {
  max-width: inherit;
  height: 500px;
  border: 5px solid greenyellow;
}
</style>
