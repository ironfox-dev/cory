import { createRouter, createWebHashHistory } from 'vue-router'
import Sign from '../views/Sign.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Revenue from '../views/Revenue.vue'
import CompleteProfile from '../views/CompleteProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/completeprofile',
    name: 'CompleteProfile',
    component: CompleteProfile
  },
  {
    path: '/revenue',
    name: 'Revenue',
    component: Revenue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
