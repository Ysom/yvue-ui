---
title: popover - 弹出框
sidebarDepth: 2
---

# 弹出框

## 基础用法

<ClientOnly><popover-demo></popover-demo></ClientOnly>

::: details 查看源码
```vue
<div class="popover-demo-con">
    <div class="mt-20">
      <yv-popover trigger="click">
        <p slot="content">来了老弟</p>
        <yv-button>click激活</yv-button>
      </yv-popover>
      <yv-popover trigger="hover">
        <p slot="content">来了老弟</p>
        <yv-button>hover激活</yv-button>
      </yv-popover>
    </div>
    <div class="mt-20">
      <yv-popover position="top">
        <p slot="content">来了老弟</p>
        <yv-button>顶部</yv-button>
      </yv-popover>
      <yv-popover position="bottom">
        <p slot="content">来了老弟</p>
        <yv-button>底部</yv-button>
      </yv-popover>
      <yv-popover position="left">
        <p slot="content">来了老弟</p>
        <yv-button>左侧</yv-button>
      </yv-popover>
      <yv-popover position="right">
        <p slot="content">来了老弟</p>
        <yv-button>右侧</yv-button>
      </yv-popover>
    </div>
</div>

<style scoped lang="scss">
.mt-20 {
  margin-top: 20px;
}
</style>
```
:::

## Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `trigger`     | 触发方式 | string | click/hover | click |
| `position`    | 弹出位置 | string | left/right/top/bottom | top |