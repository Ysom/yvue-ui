<template>
  <div class="button-demo-container">
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
  </div>
</template>

<script>
import Button from '../../../src/components/Button'
import ButtonGroup from '../../../src/components/ButtonGroup'

export default {
  name: "button-demo",
  components: {
    YvButton: Button,
    YvButtonGroup: ButtonGroup
  },
  data() {
    return {
      loading: true,
      disabled: true
    }
  }
}
</script>

<style scoped>
.button-demo-container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>