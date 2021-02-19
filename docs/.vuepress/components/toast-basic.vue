<template>
  <div class="toast-basic-con">
    <yv-button @click="getRandom('top')">上边top</yv-button>
    <yv-button @click="getRandom('right')">右边right</yv-button>
    <yv-button @click="getRandom('bottom')">下边bottom</yv-button>
    <yv-button @click="getRandom('left')">左边left</yv-button>
    <yv-button @click="getRandom('middle')">中间middle</yv-button>
    <yv-button @click="showHTML">显示html</yv-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../src/components/button/Button'
  import plugin from '../../../src/components/plugin'
  Vue.use(plugin)

  export default {
    name: "toast-basic",
    components: {
      YvButton: Button
    },
    data() {
      return {}
    },
    methods: {
      getRandom(position) {
        this.$toast({
          message: `随机数： ${Math.floor(Math.random() * 10000)}`,
          position: position
        })
      },
      showHTML() {
        this.$toast({
          message: `<span style="color: #C0C4CC">这是一段color为#C0C4CC的html</span>`,
          enableHtml: true,
          position: 'top',
          autoClose: 3
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.toast-basic-con {
  margin-top: 20px;
}
</style>
