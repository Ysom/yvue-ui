<template>
  <div class="layout-align-container">
    <yv-row>
      <yv-col span="10"><div class="col-child"></div></yv-col>
      <yv-col span="10"><div class="col-child"></div></yv-col>
    </yv-row>
    <yv-row align="center">
      <yv-col span="10"><div class="col-child"></div></yv-col>
      <yv-col span="10"><div class="col-child"></div></yv-col>
    </yv-row>
    <yv-row align="right">
      <yv-col span="10"><div class="col-child"></div></yv-col>
      <yv-col span="10"><div class="col-child"></div></yv-col>
    </yv-row>
  </div>
</template>

<script>
  import Row from '../../../src/components/layout/Row'
  import Col from '../../../src/components/layout/Col'
  export default {
    name: "layout-align",
    components: {
      YvRow: Row,
      YvCol: Col
    }
  }
</script>

<style scoped lang="scss">
  @import './layout';
  .yv-row {
    background-color: #F9FAFC;
  }
</style>
