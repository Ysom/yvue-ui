<template>
  <div class="wrapper" :class="toastClasses">
    <div
      class='yv-toast'
      ref="toast"
    >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div
          v-else
          v-html='$slots.default[0]'
        ></div>
      </div>
      <div class="line" ref="line" v-if="closeButton.text"></div>
      <span
        class="close"
        v-if="closeButton.text"
        @click="handleClose"
      >{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YvToast",
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'right', 'bottom', 'left', 'middle',].indexOf(value) >= 0
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      closeButton: {
        type: Object,
        default() {
          return {}
        }
      },
      autoClose: {
        type: [Boolean, Number],
        default: 2,
        validator(value) {
          return value === false || typeof value === 'number'
        }
      }
    },
    computed: {
      toastClasses() {
        return {
          [`toast-position-${this.position}`]: true
        }
      }
    },
    data() {
      return {}
    },
    mounted() {
      this.updateStyle()
      this.onAutoClose()
    },
    methods: {
      updateStyle() {
        if (this.closeButton.text) {
          this.$nextTick(() => {
            this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
          })
        }
      },
      onAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.onClose()
          }, this.autoClose * 1000)
        }
      },
      handleClose() {
        this.onClose()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      },
      onClose() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes pushToast-top {
    0% {opacity: 0;transform: translateY(-100%)}
    100% {opacity: 1;transform: translateY(0)}
  }
  @keyframes pushToast-bottom {
    0% {opacity: 0;transform: translateY(100%)}
    100% {opacity: 1;transform: translateY(0)}
  }
  @keyframes pushToast-middle {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes pushToast-left {
    0% {opacity: 0;transform: translateX(-100%)}
    100% {opacity: 1;transform: translateY(0)}
  }
  @keyframes pushToast-right {
    0% {opacity: 0;transform: translateX(100%)}
    100% {opacity: 1;transform: translateY(0)}
  }

  $font-size:14px;
  $toast-min-height:40px;
  $toast-bg:rgba(0,0,0,0.75);

  .wrapper {
    position: fixed;
    z-index: 9999;
    &.toast-position-top {
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      .yv-toast {
        animation: pushToast-top .3s;
      }
    }
    &.toast-position-right {
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      .yv-toast {
        animation: pushToast-right .3s;
      }
    }
    &.toast-position-bottom {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      .yv-toast {
        animation: pushToast-bottom .3s;
      }
    }
    &.toast-position-left {
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      .yv-toast {
        animation: pushToast-left .3s;
      }
    }
    &.toast-position-middle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .yv-toast{
        animation: pushToast-middle 1s;
      }
    }
  }
  .yv-toast {
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    background: $toast-bg;
    padding: 0 16px;
    display: flex;
    align-items: center;
    min-height: $toast-min-height;
    line-height: 1.8;
    font-size: $font-size;
    color:white;
    .message {
      padding: 8px 0;
    }
    .line {
      margin: 0 1.5em;
      border-left: 1px solid white;
      height: 100%;
    }
    .close{
      flex-shrink: 0;
    }
  }

</style>
