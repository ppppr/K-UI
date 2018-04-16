import installation from './installation.md'
import quickstart from './quickstart.md'
import button from './button.md'
import color from './color.md'

const routes = [
  { path: '/', component: installation },
  { path: '/component/quickstart', component: quickstart },
  { path: '/component/button', component: button },
  { path: '/component/color', component: color },
]

export default routes