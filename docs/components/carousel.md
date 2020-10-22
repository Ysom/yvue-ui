---
title: Carousel - 走马灯
sidebarDepth: 2
---

# 走马灯

## 示例

<ClientOnly><carousel-demo></carousel-demo></ClientOnly>

::: details 点击查看源码
```vue
<yv-carousel
  :selected.sync="selected1"
  :autoPlay="false"
>
  <yv-carousel-item
    v-for="item in list1"
    :key="item.name"
    :name="item.name"
  >
    <div class="flex-center item-con">
      {{item.content}}
    </div>
  </yv-carousel-item>
</yv-carousel>

<yv-carousel :selected.sync="selected2" :auto-play-delay="1000">
  <yv-carousel-item
    v-for="item in list2"
    :key="item.name"
    :name="item.name"
  >
    <div class="flex-center item-con">
      {{item.content}}
    </div>
  </yv-carousel-item>
</yv-carousel>

<script>
export default {
  data() {
    return {
      selected1: 'first',
      selected2: 'first',
      list1: [
        {
          name: 'first',
          content: '1'
        },
        {
          name: 'second',
          content: '2'
        },
        {
          name: 'third',
          content: '3'
        }
      ],
      list2: [
        {
          name: 'first',
          content: '1'
        },
        {
          name: 'second',
          content: '2'
        },
        {
          name: 'third',
          content: '3'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-con {
  height: 150px;
}
</style>
```
:::

## Carousel Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `selected`     | 选中的走马灯，用`.sync`绑定 | string| -- | -- |
| `autoPlay`    | 是否自动轮播 | boolean | true/false | true |
| `autoPlayDelay` | 轮播的时长，毫秒 | number | -- | 3000 |

## CarouselItem Attributes

| 参数        | 说明 | 类型 | 可选值 | 默认值  |
|------------|-----|-----|-------|--------|
| `name`     | 唯一标识 | string| -- | -- |
