const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/Row'
import Col from '../src/components/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('Col存在', () => {
    expect(Col).to.be.ok
  })
  it('可以接收span', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 12
      }
    }).$mount(div)
    const colElement = vm.$el
    expect(colElement.classList.contains('yv-col-12')).to.be.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以接收offset', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 6
      }
    }).$mount(div)
    const colElement = vm.$el
    expect(colElement.classList.contains('yv-col-offset-6')).to.be.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以接收phone', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        phone: {
          span: 12,
          offset: 12
        }
      }
    }).$mount(div)
    const colElement = vm.$el
    expect(colElement.classList.contains('yv-col-phone-12')).to.be.eq(true)
    expect(colElement.classList.contains('yv-col-phone-offset-12')).to.be.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以接收iPad', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        iPad: {
          span: 12,
          offset: 12
        }
      }
    }).$mount(div)
    const colElement = vm.$el
    expect(colElement.classList.contains('yv-col-iPad-12')).to.be.eq(true)
    expect(colElement.classList.contains('yv-col-iPad-offset-12')).to.be.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以接收narrowPC', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPC: {
          span: 12,
          offset: 12
        }
      }
    }).$mount(div)
    const colElement = vm.$el
    expect(colElement.classList.contains('yv-col-narrowPC-12')).to.be.eq(true)
    expect(colElement.classList.contains('yv-col-narrowPC-offset-12')).to.be.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it('可以接收widePC', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePC: {
          span: 12,
          offset: 12
        }
      }
    }).$mount(div)
    const colElement = vm.$el
    expect(colElement.classList.contains('yv-col-widePC-12')).to.be.eq(true)
    expect(colElement.classList.contains('yv-col-widePC-offset-12')).to.be.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})