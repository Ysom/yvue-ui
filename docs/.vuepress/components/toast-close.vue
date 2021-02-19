<template>
  <div class="toast-close-con">
    <yv-button @click="autoClose">定时5s关闭</yv-button>
    <yv-button @click="closeCallback">自定义回调事件</yv-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../src/components/button/Button'
  import plugin from '../../../src/components/plugin'
  Vue.use(plugin)

  export default {
    name: "toast-close",
    components: {
      YvButton: Button
    },
    methods: {
      autoClose() {
        this.$toast({
          message: `自定义关闭时间`,
          autoClose: 5,
          position: 'top'
        })
      },
      closeCallback() {
        const _this = this
        this.$toast({
          message: `自定义回调函数`,
          closeButton: {
            text: '关闭',
            callback() {
              _this.$toast({
                message: '成功关闭',
                autoClose: 1
              })
            }
          },
          autoClose: 3,
          position: 'top'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.toast-close-con {
  margin-top: 20px;
}
</style>
