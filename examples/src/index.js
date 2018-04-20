import Vue from 'vue'
import Kui from '../../src'
import App from './App'
import router from './router.config'

Vue.config.productionTip = false

Vue.use(...Kui)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
