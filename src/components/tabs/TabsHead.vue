<template>
  <div class="yv-tabs-head">
    <div class="title-wrapper" ref="titleWrapper">
      <slot></slot>
      <div class="line" ref='line'></div>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "YvTabsHead",
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(name, vm) => {
      let line = this.$refs.line
      let { left, right, top, height } = vm.$el.getBoundingClientRect()
      let { left: wrapperLeft, top: wrapperTop, height: wrapperHeight } = this.$refs.titleWrapper.getBoundingClientRect()
      line.style.width = right - left + 'px'
      line.style.bottom = -4 +'px'
      line.style.left = left - wrapperLeft + 'px'
    })
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
$tab-item-current-color: #296aef;
$tab-height:40px;
$head-border:#ddd;
.yv-tabs-head{
  position: relative;
  border-bottom: 1px solid $head-border;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: $tab-height;
  .actions{
    margin-left: auto;
  }
  >.title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    >.line {
      position: absolute;
      bottom: 0;
      border-bottom: 3px solid $tab-item-current-color;
      transition: all 0.3s linear;
    }
  }
}
</style>