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
import Tabs from './components/Tabs'
import TabsHead from './components/TabsHead'
import TabsItem from './components/TabsItem'
import TabsBody from './components/TabsBody'
import TabsPane from './components/TabsPane'
import Toast from './components/plugin';

Vue.component('YvButton', Button);
Vue.component('YvButtonGroup', ButtonGroup)
Vue.component('YvRow', Row)
Vue.component('YvCol', Col)
Vue.component('YvContainer', Container)
Vue.component('YvHeader', Header)
Vue.component('YvAside', Aside)
Vue.component('YvMain', Main)
Vue.component('YvFooter', Footer)
Vue.component('YvTabs', Tabs)
Vue.component('YvTabsHead', TabsHead)
Vue.component('YvTabsItem', TabsItem)
Vue.component('YvTabsBody', TabsBody)
Vue.component('YvTabsPane', TabsPane)

Vue.use(Toast)

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
    },
    handleToast() {
      this.$toast({
        message: `0-10000随机数： ${Math.floor(Math.random() * 10000)}`,
        closeButton: {
          text: '关闭',
          callback() {
            console.log('close toast')
          }
        },
        autoClose: 3,
        position: 'top'
      })
    }
  }
})
