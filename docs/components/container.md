---
title: Container - 容器
sidebarDepth: 2
---

# 布局容器

## 说明
**Container**容器使用了`flex`布局，默认排列方向为`column`，当子组件有`yv-aside`时，排列方向为`row`。

`yv-container`：外层容器，用来包裹下面陈列的组件；

`yv-header`：头部组件；

`yv-aside`：侧边栏组件；

`yv-main`：主要区域组件；

`yv-footer`：底部组件。

## 常见页面布局

<ClientOnly><container-demo></container-demo></ClientOnly>

## 代码

::: details 查看源码
```vue
<yv-container>
  <yv-header>header</yv-header>
  <yv-main>main</yv-main>
  <yv-footer>footer</yv-footer>
</yv-container>

<yv-container class="mt-10">
  <yv-header>header</yv-header>
  <yv-container>
    <yv-aside>aside</yv-aside>
    <yv-main>main</yv-main>
  </yv-container>
  <yv-footer>footer</yv-footer>
</yv-container>

<yv-container class="mt-10">
  <yv-header>header</yv-header>
  <yv-container>
    <yv-aside>aside</yv-aside>
    <yv-container>
      <yv-main class="inline-main">main</yv-main>
      <yv-footer>footer</yv-footer>
    </yv-container>
  </yv-container>
</yv-container>

<yv-container class="mt-10">
  <yv-aside>aside</yv-aside>
  <yv-container>
    <yv-header>header</yv-header>
    <yv-main class="all-inline-main">main</yv-main>
    <yv-footer>footer</yv-footer>
  </yv-container>
</yv-container>

<style scoped lang="scss">
.mt-10 {
  margin-top: 10px;
}
.yv-header, .yv-footer {
  background-color: #b3c0d1;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.yv-main {
  background-color: #e9eef3;
  height: 200px;
  line-height: 200px;
  text-align: center;
  &.inline-main {
    height: 150px;
    line-height: 150px;
  }
  &.all-inline-main {
    height: 100px;
    line-height: 100px;
  }
}
.yv-aside {
  background-color: #d3dce6;
  width: 120px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
</style>
```
:::

## Attributes

无`attributes`设置，容器样式等根据需要自行设置。