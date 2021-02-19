import Toast from './toast/Toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(toastOptions) {
      if (currentToast) {
        currentToast.onClose()
      }
      currentToast = createToast({
        Vue,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast({ Vue, propsData, onClose }) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({ propsData })
  toast.$slots.default = [propsData.message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
