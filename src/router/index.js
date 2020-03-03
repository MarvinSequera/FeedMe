import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Food from '../views/Food.vue'
import DetailFood from '../views/DetailFood.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/food/:id',
    name: 'DetailFood',
    component: DetailFood
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
