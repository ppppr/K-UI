import KButton from '../packages/button'
import KTree from '../packages/tree'

const components = [
  KButton,
  KTree
]

console.log(111);

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  KButton,
  KTree
}

export default [
  install
]
