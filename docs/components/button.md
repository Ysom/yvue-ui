---
title: Button - 按钮
sidebarDepth: 2
---

# 按钮

## 示例

<ClientOnly><button-demo></button-demo></ClientOnly>

## 代码

::: details 点击查看源码
```vue
<yv-button>默认按钮</yv-button>
<yv-button icon="setting">icon按钮</yv-button>
<yv-button icon-position="right" icon="download">右侧icon</yv-button>
<yv-button :loading="loading">加载中</yv-button>
<yv-button :disabled="disabled">禁止按钮</yv-button>
<div style="margin-top: 20px;">
  <yv-button-group>
    <yv-button>你先上</yv-button>
    <yv-button>稳如老狗</yv-button>
    <yv-button>我殿后</yv-button>
  </yv-button-group>
</div>
```
:::

## Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `icon`     | 图标名 | string| -- | -- |
| `icon-position`    | 图标位置 | string | left/right | left |
| `loading` | 是否显示loading | boolean | false/true | false |
| `disabled` | 是否禁用 | boolean | false/true | false |
