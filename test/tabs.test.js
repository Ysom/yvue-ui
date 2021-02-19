const expect = chai.expect

import Vue from 'vue'
import Tabs from '../src/components/tabs/Tabs'
import TabsHead from '../src/components/tabs/TabsHead.vue'
import TabsBody from '../src/components/tabs/TabsBody.vue'
import TabsItem from '../src/components/tabs/TabsItem.vue'
import TabsPane from '../src/components/tabs/TabsPane.vue'

Vue.component('yv-tabs', Tabs)
Vue.component('yv-tabs-head', TabsHead)
Vue.component('yv-tabs-body', TabsBody)
Vue.component('yv-tabs-item', TabsItem)
Vue.component('yv-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('tabs存在.', () => {
    expect(Tabs).to.be.ok
  })
  describe('props',() => {
    it('可以接受 selected',(done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <yv-tabs selected="tab1">
          <yv-tabs-head>
            <yv-tabs-item name="tab1" >tab1</yv-tabs-item>
            <yv-tabs-item name="tab2">tab2</yv-tabs-item>
            <yv-tabs-item name="tab3">tab3</yv-tabs-item>
          </yv-tabs-head>
          <yv-tabs-body>
            <yv-tabs-pane name="tab1">content1</yv-tabs-pane>
            <yv-tabs-pane name="tab2">content2</yv-tabs-pane>
            <yv-tabs-pane name="tab3">content3</yv-tabs-pane>
          </yv-tabs-body>
        </yv-tabs-body>
      `
      let vm = new Vue({
        el: div
      })
      vm.$nextTick(()=>{
        let currentItem = vm.$el.querySelector(`.yv-tabs-item[data-name='tab1']`)
        expect(currentItem.classList.contains('current-tabs-item')).to.be.true
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
})