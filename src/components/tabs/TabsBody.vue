<template>
  <div class="yv-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YvTabsBody",
  inject:['eventBus'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>