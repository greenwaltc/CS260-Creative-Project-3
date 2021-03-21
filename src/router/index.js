import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Saved from '../views/Saved.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'Search',
    component: Home
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
