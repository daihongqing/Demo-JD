import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import classify from './classify'
import shopping from './shopping'
import surprise from './surprise'
import user from './user'
import home from './home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/index/home', 
    component: Index,
    children: home.concat(classify, shopping, surprise, user)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/acco',
    name: 'acco',
    component: () => import(/* webpackChunkName: "about" */ '../components/user/acco.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
