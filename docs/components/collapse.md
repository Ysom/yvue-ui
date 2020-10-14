---
title: collapse - 折叠面板
sidebarDepth: 2
---

# 折叠面板

## 基础用法

可以同时展开多个面板，面板之间互不影响。

<ClientOnly><collapse-basic></collapse-basic></ClientOnly>

::: details 查看源码
```vue
<yv-collapse :selected.sync="selects">
  <yv-collapse-item title="面板简介" name="1">
    这是面板简介的内容
  </yv-collapse-item>
  <yv-collapse-item title="服务反馈" name="2">
    这是服务反馈的内容
  </yv-collapse-item>
</yv-collapse>

<script>
  export default {
    data() {
      return {
        selects: ['1', '2']
      }
    }
  }
</script>
```
:::

## 手风琴效果

通过`single`属性设置每次只能展开一个面板。

<ClientOnly><collapse-single></collapse-single></ClientOnly>

::: details 查看源码
```vue
<yv-collapse :selected.sync="selects" single>
  <yv-collapse-item title="面板简介" name="1">
    这是面板简介的内容
  </yv-collapse-item>
  <yv-collapse-item title="服务反馈" name="2">
    这是服务反馈的内容
  </yv-collapse-item>
</yv-collapse>

<script>
  export default {
    data() {
      return {
        selects: ['1']
      }
    }
  }
</script>
```
:::

## Collapse Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `selected`     | 当前展示的面板的`name`集合，用修饰符`.sync`绑定 | array | -- | -- |
| `single`    | 是否开启手风琴模式 | boolean | true/false | false |

## CollapseItem Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `title`     | 面板标题 | string | -- | -- |
| `name`    | 面板的唯一标识 | string | -- | -- |
