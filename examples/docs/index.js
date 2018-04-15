import button from './button.md'
import installation from './installation.md'
import quickstart from './quickstart.md'

const routes = [
  { path: '/', component: installation },
  { path: '/component/quickstart', component: quickstart },
  { path: '/component/button', component: button },
]

export default routes