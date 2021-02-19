<template>
  <div class="collapse-single-con">
    <yv-collapse class="mt-20" :selected.sync="selects" single>
      <yv-collapse-item title="面板简介" name="1">
        这是面板简介的内容
      </yv-collapse-item>
      <yv-collapse-item title="服务反馈" name="2">
        这是服务反馈的内容
      </yv-collapse-item>
    </yv-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/components/collapse/Collapse'
  import CollapseItem from '../../../src/components/collapse/CollapseItem'
  export default {
    name: "collapse-single",
    components: {
      YvCollapse: Collapse,
      YvCollapseItem: CollapseItem
    },
    data() {
      return {
        selects: ['1']
      }
    }
  }
</script>

<style scoped lang="scss">
.collapse-single-con {
  .mt-20 {
    margin-top: 20px;
  }
}
</style>
