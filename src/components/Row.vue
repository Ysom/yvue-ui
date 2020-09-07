<template>
  <div
    class="yv-row"
    :class="rowClass"
    :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "YvRow",
    props: {
      gutter: [String, Number],
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value)
        }
      }
    },
    computed: {
      rowClass() {
        const { align } = this
        return [align && `align-${align}`]
      },
      rowStyle() {
        return {
          marginLeft: -this.gutter/2 + 'px',
          marginRight: -this.gutter/2 + 'px'
        }
      }
    },
    mounted() {
      this.$children.forEach(child => {
        child.gutter = this.gutter
      })
    }
  }
</script>

<style scoped lang="scss">
.yv-row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>
