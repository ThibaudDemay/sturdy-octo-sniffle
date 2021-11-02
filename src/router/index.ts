import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Waiting from '@/views/Waiting.vue'
import DisplayWork from '@/views/DisplayWork.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting,
  },
  {
    path: '/display-work',
    name: 'DisplayWork',
    component: DisplayWork,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
