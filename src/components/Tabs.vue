<template>
  <div class="yv-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "YvTabs",
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      console.warn('yv-tabs缺少子组件')
    }
    this.$children.forEach(child => {
      if (child.$options.name === 'YvTabsHead') {
        child.$children.forEach(vm => {
          if (vm.$options.name === 'YvTabsItem' && vm.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, vm)
          }
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>