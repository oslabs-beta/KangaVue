<template #behavior="{ on, actions }">
          <div class="pa-2">
            <h3 class="pb-2">Your map</h3>
            <tree :data="tree" node-text="name" layoutType="horizontal" duration=0>
            <slot name="behavior" :on="on" :actions="actions">
            </slot>
            </tree>
          </div>

</template>

<script>
// import * as d3 from "d3";
import {tree, CollapseOnClick} from 'vued3tree'
export default {
  name: "Map",
  components:{
    tree,
    CollapseOnClick
  },
  data() {
    return {
      tree: {children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-4-RwvHeader"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-5-RwvFooter"},{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[{children:[{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[{children:[{children:[],name:"vue-component-2-RouterLink"},{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-11-RwvArticleMeta"},{children:[{children:[],name:"vue-component-12-TagList"}],name:"vue-component-2-RouterLink"}],name:"vue-component-9-RwvArticlePreview"},{children:[],name:"vue-component-10-Pagination"}],name:"vue-component-8-RwvArticleList"}],name:"vue-component-7-rwv-home-global"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"},{children:[{children:[],name:"vue-component-2-RouterLink"}],name:"vue-component-13-RwvTag"}],name:"vue-component-6-home"}],name:"vue-component-3-App"}
    };
  },
}
</script>
<style >
  .pa-2{
    width: 150px;
    height: 150px;
  }
</style>