---
title: tabs - 标签页
sidebarDepth: 2
---

# 标签页

## 说明
为了让结构层次更明显，在`tabs-head`里面需要有子组件`tabs-item`，在`tabs-body`里面需要有子组件`tabs-pane`，表示各自的标签与内容。

但结构分明之外也有些许缺陷，就是`tabs-item`和`tabs-pane`都要加上相同的`name`属性。

## 示例

<ClientOnly><tabs-demo></tabs-demo></ClientOnly>

::: details 查看源码
```vue
<div class="tabs-demo-container">
    <yv-tabs selected="tabs1">
      <yv-tabs-head>
        <yv-tabs-item name="tabs1">绿皮书v3</yv-tabs-item>
        <yv-tabs-item name="tabs2">红宝书v4</yv-tabs-item>
        <yv-tabs-item name="tabs3" :disabled="true">经典待上市</yv-tabs-item>
      </yv-tabs-head>
    
      <yv-tabs-body>
        <yv-tabs-pane name="tabs1">JavaScript语言精髓与编程实践第三版</yv-tabs-pane>
        <yv-tabs-pane name="tabs2">JavaScript高级程序设计第四版</yv-tabs-pane>
        <yv-tabs-pane name="tabs3">我是你无法看到的内容</yv-tabs-pane>
      </yv-tabs-body>
    </yv-tabs>
</div>

<style scoped lang="scss">
    .tabs-demo-container {
      margin-top: 20px;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
    }
</style>
```
:::

## Tabs Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `selected`     | 选中的标签页，可用.sync修饰符绑定，必填 | string | -- | -- |

## Tabs-head Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `template`     | tabs-head的插槽，如需添加内容，slot必须为 actions | string | -- | -- |

## Tabs-item/pane Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `name`     | 标签页的名称与内容标识，唯一且必填，必填 | string | -- | -- |
| `disabled`     | 是否禁用此标签页 | boolean | -- | false |