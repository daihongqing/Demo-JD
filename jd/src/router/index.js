import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import classify from './classify'
import shopping from '../components/shopping/shopping.vue'
import order from '../components/shopping/order.vue'
import surprise from './surprise'
import user from './user'
import home from './home'
import acco from './acco'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/index/home',
    component: Index,
    children: home.concat(classify,  surprise, user, acco)
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: shopping,
    children:[
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: order,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
