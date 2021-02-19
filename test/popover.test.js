const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/components/popover/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('popover存在.', () => {
    expect(Popover).to.be.ok
  })
  describe('props', () => {
    it('可以接受 position', (done) => {
      Vue.component('yv-popover', Popover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
            <yv-popover position="left" ref="a">
                <template slot="content">
                    popover展示的文案
                </template>
                <button>popover</button>
            </yv-popover>
            `
      let vm = new Vue({
        el: div
      })
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-left')).to.be.true
        done()
      })
    })
  })
})