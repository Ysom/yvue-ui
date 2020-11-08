---
title: Pagination - 分页
sidebarDepth: 2
---

# 按钮

## 示例

<ClientOnly><pagination-demo></pagination-demo></ClientOnly>

## 代码

::: details 点击查看源码
```vue
<yv-pagination
  :total-page="totalPage"
  :current-page="currentPage"
  @change="onPageChange"
></yv-pagination>

<script>
    export default {
      data() {
        return {
          currentPage: 1,
          totalPage: 10
        }
      },
      methods: {
        onPageChange(page) {
          this.currentPage = page
        }
      }
    }
</script>
```
:::

## Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `total-page`     | 总页数 | number| -- | -- |
| `current-page`    | 当前页数 | number | -- | -- |
| `hideIfOnePage` | 当页数只有一页的时候，是否隐藏分页器 | boolean | false/true | true |