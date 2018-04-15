import Vue from 'vue'
import Kui from 'kui'
import App from './App'
import router from './router.config'

Vue.config.productionTip = false

Vue.use(...Kui)

// const { Hello } = Kui
// Vue.component(Hello.name, Hello)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
