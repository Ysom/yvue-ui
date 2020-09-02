import Vue from 'vue'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'

Vue.component('YvButton', Button);
Vue.component('YvButtonGroup', ButtonGroup)

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
})
