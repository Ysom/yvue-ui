<template>
  <div
    class='yv-tabs-pane'
    :class="tabsPane"
    v-if="active"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YvTabsPane",
  inject: ['eventBus'],
  props: {
    name: {
      type: [Number,String],
      required: true
    }
  },
  computed: {
    tabsPane() {
      return {
        [`current-tabs-pane`]: this.active
      }
    }
  },
  data() {
    return {
      active: false
    }
  },
  created() {
    this.eventBus.$on('update:selected',(name, vm) => {
      this.active = name === this.name
    })
  },
}
</script>

<style scoped lang="scss">
.current-tabs-pane{
  padding: 1em;
}
</style>