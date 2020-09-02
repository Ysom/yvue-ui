import Vue from 'vue'
import YvButton from './components/Button'
import YvButtonGroup from './components/ButtonGroup'

Vue.component('YvButton', YvButton);
Vue.component('YvButtonGroup', YvButtonGroup)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
});
