<template>
  <div class="yv-container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YvContainer",
  data() {
    return {
      containerClass: {
        hasAside: false
      }
    }
  },
  mounted() {
    this.$children.some(child => {
      if (child.$options.name === 'YvAside') {
        this.containerClass.hasAside = true
        return true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.yv-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasAside {
    flex-direction: row;
  }
}
</style>