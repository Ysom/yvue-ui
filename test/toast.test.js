const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/Toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('toast', () => {
  it('toast存在.', () => {
    expect(Toast).to.be.ok
  })
  describe('props',() => {
    it('可以接收 autoClose',(done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const constructor = Vue.extend(Toast)
      const vm = new constructor({
        propsData:{
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close',() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
    it('可以接收 closeButton',() => {
      const callback = sinon.fake();
      const div = document.createElement('div')
      document.body.appendChild(div)
      const constructor = Vue.extend(Toast)
      const vm = new constructor({
        propsData:{
          closeButton:{
            text:'知道了',
            callback,
          },
        }
      }).$mount(div)
      let closeElement = vm.$el.querySelector('.close')
      expect(closeElement.innerHTML).to.eq('知道了')
      closeElement.click()
      expect(callback).to.have.been.called
      vm.$el.remove()
      vm.$destroy()
    })
    it('可以接收 enableHtml',() => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const constructor = Vue.extend(Toast)
      const vm = new constructor({
        propsData:{
          enableHtml:true
        }
      })
      vm.$slots.default = [`<h3 id="test">这是一个h3标签</h3>`]
      vm.$mount(div)
      let message = vm.$el.querySelector('#test')
      expect(message).to.be.exist
      vm.$el.remove()
      vm.$destroy()
    })
    it('可以接收 position',() => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const constructor = Vue.extend(Toast)
      const vm = new constructor({
        propsData:{
          position: 'bottom'
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('toast-position-bottom')).to.be.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
  })
})