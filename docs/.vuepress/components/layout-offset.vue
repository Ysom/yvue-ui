<template>
  <div class="layout-offset-container">
    <yv-row gutter="10">
      <yv-col span="6"><div class="col-child"></div></yv-col>
      <yv-col span="6" offset="6"><div class="col-child"></div></yv-col>
    </yv-row>
    <yv-row gutter="10">
      <yv-col span="6" offset="6"><div class="col-child"></div></yv-col>
      <yv-col span="6" offset="6"><div class="col-child"></div></yv-col>
    </yv-row>
  </div>
</template>

<script>
  import Row from '../../../src/components/layout/Row'
  import Col from '../../../src/components/layout/Col'
  export default {
    name: "layout-offset",
    components: {
      YvRow: Row,
      YvCol: Col
    }
  }
</script>

<style scoped lang="scss">
  @import './layout';
</style>
