import { createRouter, createWebHashHistory } from 'vue-router'
import Sign from '../views/Sign.vue'

const routes = [
  {
    path: '/',
    name: 'Sign',
    component: Sign
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
