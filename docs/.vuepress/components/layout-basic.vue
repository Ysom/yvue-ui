<template>
  <div class="layout-basic-container">
    <yv-row>
      <yv-col span="24"><div class="col-child"></div></yv-col>
    </yv-row>
    <yv-row>
      <yv-col span="12"><div class="col-child"></div></yv-col>
      <yv-col span="12"><div class="col-child"></div></yv-col>
    </yv-row>
    <yv-row>
      <yv-col span="4"><div class="col-child"></div></yv-col>
      <yv-col span="12"><div class="col-child"></div></yv-col>
      <yv-col span="8"><div class="col-child"></div></yv-col>
    </yv-row>
  </div>
</template>

<script>
  import Row from '../../../src/components/layout/Row'
  import Col from '../../../src/components/layout/Col'
  export default {
    name: "layout-basic",
    components: {
      YvRow: Row,
      YvCol: Col
    }
  }
</script>

<style scoped lang="scss">
  @import './layout';
</style>
