---
title: Layout - 布局
sidebarDepth: 2
---

# 布局

## 基础栅栏布局

<ClientOnly><layout-basic></layout-basic></ClientOnly>

::: details 查看源码
```vue
<yv-row>
  <yv-col span="24"><div class="col-child"></div></yv-col>
</yv-row>
<yv-row>
  <yv-col span="12"><div class="col-child"></div></yv-col>
  <yv-col span="12"><div class="col-child"></div></yv-col>
</yv-row>
<yv-row>
  <yv-col span="4"><div class="col-child"></div></yv-col>
  <yv-col span="12"><div class="col-child"></div></yv-col>
  <yv-col span="8"><div class="col-child"></div></yv-col>
</yv-row>
```
:::

## 分栏间隔布局

通过`gutter`设置分栏之间的间隔

<ClientOnly><layout-gutter></layout-gutter></ClientOnly>

::: details 查看源码
```vue
<yv-row :gutter="10">
  <yv-col span="12"><div class="col-child"></div></yv-col>
  <yv-col span="12"><div class="col-child"></div></yv-col>
</yv-row>
<yv-row :gutter="20">
  <yv-col span="6"><div class="col-child"></div></yv-col>
  <yv-col span="6"><div class="col-child"></div></yv-col>
  <yv-col span="6"><div class="col-child"></div></yv-col>
  <yv-col span="6"><div class="col-child"></div></yv-col>
</yv-row>
```
:::

## 分栏偏移

通过`offset`设置偏移的栏数

<ClientOnly><layout-offset></layout-offset></ClientOnly>

::: details 查看源码
```vue
<yv-row gutter="10">
  <yv-col span="6"><div class="col-child"></div></yv-col>
  <yv-col span="6" offset="6"><div class="col-child"></div></yv-col>
</yv-row>
<yv-row gutter="10">
  <yv-col span="6" offset="6"><div class="col-child"></div></yv-col>
  <yv-col span="6" offset="6"><div class="col-child"></div></yv-col>
</yv-row>
```
:::

## 对齐方式

通过`align`设置对齐方式

<ClientOnly><layout-align></layout-align></ClientOnly>

::: details 查看源码
```vue
<yv-row>
  <yv-col span="10"><div class="col-child"></div></yv-col>
  <yv-col span="10"><div class="col-child"></div></yv-col>
</yv-row>
<yv-row align="center">
  <yv-col span="10"><div class="col-child"></div></yv-col>
  <yv-col span="10"><div class="col-child"></div></yv-col>
</yv-row>
<yv-row align="right">
  <yv-col span="10"><div class="col-child"></div></yv-col>
  <yv-col span="10"><div class="col-child"></div></yv-col>
</yv-row>

<style>
  .yv-row {
    background-color: #F9FAFC;
  }
</style>
```
:::

## 响应式布局

通过传入不同属性值，可以设置不同屏幕大小下的布局

<ClientOnly><layout-responsive></layout-responsive></ClientOnly>

::: details 查看源码
```vue
<yv-row>
  <yv-col span="4" :i-pad="{ span: '8'}" :phone="{ span: '12' }"><div class="col-child"></div></yv-col>
  <yv-col span="20" :i-pad="{ span: '16'}" :phone="{ span: '12' }"><div class="col-child"></div></yv-col>
</yv-row>
```
:::

## Row Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `gutter`     | 栅格间隔 | string/number | -- | -- |
| `align`    | 对齐方式 | string | left/right/center | left |

## Col Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `span`     | 栅格占据的列数 | string/number | -- | -- |
| `offset`    | 栅格向左偏移的间隔列数 | string | -- | -- |
| `phone`    | 页面大小为phone`<577px`时的布局 | object(例如 {span: 6, offset: 6}) | -- | -- |
| `iPad`    | 页面大小为iPad`<769px`时的布局 | object(例如 {span: 6, offset: 6}) | -- | -- |
| `narrowPC` | 页面大小为窄屏PC端`<933px`时的布局 | object(例如 {span: 6, offset: 6}) | -- | -- |
| `widePC`    | 页面大小为宽屏PC端`<1201px`时的布局 | object(例如 {span: 6, offset: 6}) | -- | -- |
