import Hello from '../packages/hello/index.js'

const components = [
  Hello
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default [
  Hello
]
