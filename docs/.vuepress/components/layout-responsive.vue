<template>
  <div class="layout-responsive-container">
    <yv-row>
      <yv-col span="4" :i-pad="{ span: '8'}" :phone="{ span: '12' }"><div class="col-child"></div></yv-col>
      <yv-col span="20" :i-pad="{ span: '16'}" :phone="{ span: '12' }"><div class="col-child"></div></yv-col>
    </yv-row>
  </div>
</template>

<script>
  import Row from '../../../src/components/layout/Row'
  import Col from '../../../src/components/layout/Col'
  export default {
    name: "layout-responsive",
    components: {
      YvRow: Row,
      YvCol: Col
    }
  }
</script>

<style scoped lang="scss">
  @import './layout';
</style>
