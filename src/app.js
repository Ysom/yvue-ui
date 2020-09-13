import Vue from 'vue'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Row from './components/Row'
import Col from './components/Col'
import Container from './components/Container'
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'

Vue.component('YvButton', Button);
Vue.component('YvButtonGroup', ButtonGroup)
Vue.component('YvRow', Row)
Vue.component('YvCol', Col)
Vue.component('YvContainer', Container)
Vue.component('YvHeader', Header)
Vue.component('YvAside', Aside)
Vue.component('YvMain', Main)
Vue.component('YvFooter', Footer)

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
