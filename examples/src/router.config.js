import Vue from 'vue'
import Router from 'vue-router'
import components from '../docs'
import KButton from '../pages/button'

Vue.use(Router)

const routes = [{
  path: '/',
  component: KButton
}, ...components]

export default new Router({
  routes: routes
})
