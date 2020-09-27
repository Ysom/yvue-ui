---
title: toast - 提示框
sidebarDepth: 2
---

# 提示框

## 说明
用于弹出提示信息，该组件也可较好兼容移动端。

## 基本用法

<ClientOnly><toast-basic></toast-basic></ClientOnly>

::: details 查看源码
```vue
<div class="toast-basic-con">
  <yv-button @click="getRandom('top')">上边top</yv-button>
  <yv-button @click="getRandom('right')">右边right</yv-button>
  <yv-button @click="getRandom('bottom')">下边bottom</yv-button>
  <yv-button @click="getRandom('left')">左边left</yv-button>
  <yv-button @click="getRandom('middle')">中间middle</yv-button>
  <yv-button @click="showHTML">显示html</yv-button>
</div>

<script>
  export default {
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
```
:::

## 自定义关闭

<ClientOnly><toast-close></toast-close></ClientOnly>

::: details 查看源码
```vue
<div class="toast-close-con">
  <yv-button @click="autoClose">定时5s关闭</yv-button>
  <yv-button @click="closeCallback">自定义回调事件</yv-button>
</div>

<script>
  export default {
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
```
:::

## Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `position` | 提示框弹出的位置 | string | top、right、bottom、left | top |
| `enableHtml` | 是否是html | boolean | true、false | false |
| `closeButton` | 关闭对象，包含提示信息`text`，回调函数`callback` | object | -- | {} |
| `autoClose` | 是否自动关闭。可通过`true`/`false`来启动/关闭自动关闭，也可通过传入数值表示自动关闭的秒数 | boolean/number | -- | 2 |
