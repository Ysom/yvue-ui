<template>
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
</template>

<script>
import YvTabs from "../../../src/components/Tabs";
import YvTabsHead from "../../../src/components/TabsHead";
import YvTabsItem from "../../../src/components/TabsItem";
import YvTabsBody from "../../../src/components/TabsBody";
import YvTabsPane from "../../../src/components/TabsPane";

export default {
  name: "tabs-demo",
  components: {
    YvTabs,
    YvTabsHead,
    YvTabsItem,
    YvTabsBody,
    YvTabsPane
  }
}
</script>

<style scoped lang="scss">
.tabs-demo-container {
  margin-top: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}
</style>