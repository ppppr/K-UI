import Vue from 'vue'
import Router from 'vue-router'
import KButton from '../pages/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: KButton
    }
  ]
})
