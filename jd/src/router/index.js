import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import classify from './classify'
import shopping from './shopping'
import surprise from './surprise'
import user from './user'
import home from './home'


Vue.use(VueRouter)
import { Grid, GridItem, Icon } from 'vant';

Vue.use(Icon).use(Grid).use(GridItem);

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router