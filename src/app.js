import Vue from 'vue'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Row from './components/Row'
import Col from './components/Col'

Vue.component('YvButton', Button);
Vue.component('YvButtonGroup', ButtonGroup)
Vue.component('YvRow', Row)
Vue.component('YvCol', Col)

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
