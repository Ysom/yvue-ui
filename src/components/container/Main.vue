<template>
  <div class="yv-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YvMain",
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.yv-main {
  flex-grow: 1;
}
</style>