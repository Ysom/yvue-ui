<template>
  <div class="popover-demo-con">
    <div class="mt-20">
      <yv-popover trigger="click">
        <p slot="content">来了老弟</p>
        <yv-button>click激活</yv-button>
      </yv-popover>
      <yv-popover trigger="hover">
        <p slot="content">来了老弟</p>
        <yv-button>hover激活</yv-button>
      </yv-popover>
    </div>
    <div class="mt-20">
      <yv-popover position="top">
        <p slot="content">来了老弟</p>
        <yv-button>顶部</yv-button>
      </yv-popover>
      <yv-popover position="bottom">
        <p slot="content">来了老弟</p>
        <yv-button>底部</yv-button>
      </yv-popover>
      <yv-popover position="left">
        <p slot="content">来了老弟</p>
        <yv-button>左侧</yv-button>
      </yv-popover>
      <yv-popover position="right">
        <p slot="content">来了老弟</p>
        <yv-button>右侧</yv-button>
      </yv-popover>
    </div>
  </div>
</template>

<script>
import Popover from '../../../src/components/Popover'
import Button from '../../../src/components/Button'
export default {
  name: "popover-demo",
  components: {
    YvPopover: Popover,
    YvButton: Button
  }
}
</script>

<style scoped lang="scss">
.mt-20 {
  margin-top: 20px;
}
</style>