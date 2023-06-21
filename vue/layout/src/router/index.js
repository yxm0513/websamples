import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'flex1',
    name: 'home',
    component: Home
  },
  {
    path: '/flex1',
    name: 'Flex1',
    component: () => import('../views/Flex1.vue')
  },
  {
    path: '/grid1',
    name: 'Grid1',
    component: () => import('../views/Grid1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
