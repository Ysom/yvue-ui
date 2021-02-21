### 快速上手

### Install

``` shell script
npm install @yuqigui1083/yvue-ui --save
```

### Quick Start

组件只支持**按需引入**，减小代码体积；使用时请确保 `box-sizing` 设置为 `border-box`，且需全局引入样式文件。

```vue
<script>
import { YvButton, YvButtonGroup } from '@yuqigui1083/yvue-ui'
import '@yuqigui1083/yvue-ui/dist/index.css'

export default{
    name: 'app',
    components:{
      YvButton: YvButton,
      YvButtonGroup: YvButtonGroup
    }
}
</script>
```

### Component List

* Button - 按钮
* ButtonGroup - 按钮组合
* Layout - 布局
* Container - 容器
* Tabs - 标签页
* Toast - 提示框
* Popover - 弹出框
* Collapse - 折叠面板
* Carousel - 轮播
* Pagination - 分页
* 待更新

### Other

项目还有配套同步开发过程的[文档](https://ysom.github.io/yvue-ui-blog/)，记录项目前中后整个过程：

* 准备工作
* 组件设计思路
* 具体开发思路
* 测试、发布的过程
* 踩坑

该文档随着组件开发在持续更新中。