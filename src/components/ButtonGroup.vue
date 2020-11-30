<template>
  <div class="yv-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "YvButtonGroup"
  }
</script>

<style scoped lang="scss">
@import '../styles/button';

.yv-button-group {
  display: inline-flex;
  vertical-align: middle;
  .yv-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-bottom-left-radius: $button-radius;
      border-top-left-radius: $button-radius;
    }
    &:last-child {
      border-top-right-radius: $button-radius;
      border-bottom-right-radius: $button-radius;
    }
  }
}
</style>
