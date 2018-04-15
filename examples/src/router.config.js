import Vue from 'vue'
import Router from 'vue-router'
import routes from '../docs'
import installation from '../docs/installation.md'
import KButton from '../pages/button'

Vue.use(Router)

routes.push({
  path: '/test',
  component: KButton
})

export default new Router({
  routes: routes
})
