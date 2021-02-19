<template>
  <button
    class="yv-button"
    :class="{[`icon-${iconPosition}`]: true, 'disabled': buttonDisabled}"
    :disabled="buttonDisabled"
    @click="$emit('click')"
  >
    <div class="button-content">
      <slot></slot>
    </div>
    <yv-icon :name="icon" v-if="icon && !loading"></yv-icon>
    <yv-icon class="loading icon" name="loading" v-if="loading"></yv-icon>
  </button>
</template>

<script>
  import YvIcon from '../icon/Icon'
  export default {
    name: "YvButton",
    components: {
      YvIcon
    },
    props: {
      icon: {
        type: String
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonDisabled() {
        return this.loading || this.disabled
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../../styles/button';

.yv-button {
  border: 1px solid $border-color;
  border-radius: $button-radius;
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: $button-bg;
  height: $button-height;
  vertical-align: middle;
  font-size: $font-size;
  &:active {
    background-color: $button-active-bg;
  }
  &:hover {
    border: 1px solid $border-color-hover;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: .3em;
  }
  > .button-content {
    order: 2;
  }
  &.icon-right {
    > .button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: .3rem;
      margin-right: 0;
    }
  }
  &.disabled {
    &, &:focus, &:hover {
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
