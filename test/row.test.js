const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/Row'
import Col from '../src/components/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('Row存在 ', () => {
    expect(Row).to.be.ok
  })
  it('可以接收gutter ', (done) => {
    Vue.component('yv-row', Row)
    Vue.component('yv-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <yv-row :gutter="10">
        <yv-col :span="12"></yv-col>
        <yv-col :span="12"></yv-col>
      </yv-row>
    `
    const vm = new Vue({
      el: 'div'
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.yv-row')
      expect(getComputedStyle(row).marginLeft).to.be.eq('-5px')
      expect(getComputedStyle(row).marginRight).to.be.eq('-5px')
      const col = document.querySelectorAll('.yv-col')
      expect(getComputedStyle(col[0]).paddingLeft).to.be.eq('5px')
      expect(getComputedStyle(col[1]).paddingRight).to.be.eq('5px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('可以接收align ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'left'
      }
    }).$mount(div)
    const rowElement = vm.$el
    expect(getComputedStyle(rowElement).justifyContent).to.be.eq('flex-start')
    vm.$el.remove()
    vm.$destroy()
  })
})