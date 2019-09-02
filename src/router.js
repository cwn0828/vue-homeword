import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/menu',
      name: 'Menu',
      // 懒加载
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // 懒加载
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/personname',
      name: 'personname',
      // 懒加载
      component: () => import('./views/Personname.vue')
    },
    {
      path: '/history',
      name: 'history',
      // 懒加载
      component: () => import('./views/History.vue')
    },
    {
      path: '/phone',
      name: 'phone',
      // 懒加载
      component: () => import('./views/Phone.vue')
    },
    {
      path: '/orderingGuide',
      name: 'orderingGuide',
      // 懒加载
      component: () => import('./views/OrderingGuide.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      // 懒加载
      component: () => import('./views/Delivery.vue')
    },
    {
      path: '/login',
      name: 'login',
      // 懒加载
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // 懒加载
      component: () => import('./views/Register.vue')
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
