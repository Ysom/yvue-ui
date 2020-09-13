<template>
  <div class="container-demo-con">
    <yv-container class="mt-10">
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
  </div>
</template>

<script>
import Container from "../../../src/components/Container"
import Header from "../../../src/components/Header"
import Aside from "../../../src/components/Aside"
import Main from "../../../src/components/Main"
import Footer from "../../../src/components/Footer"
export default {
  name: "container-demo",
  components: {
    YvContainer: Container,
    YvHeader: Header,
    YvAside: Aside,
    YvMain: Main,
    YvFooter: Footer
  }
}
</script>

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