import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router';
import Home from '../Layout/Home.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: ()=>import('@/Layout/Home.vue')
}, ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router