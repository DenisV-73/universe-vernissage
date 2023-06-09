import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/room',
    name: 'RoomView',
    component: () => import('@/views/RoomView.vue')
  },
  {
    path: '/admin',
    name: 'AdminVieW',
    component: () => import('@/views/AdminView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/kunst',
  //   name: 'Kunst',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/KunstView.vue')
  // },
  {
    path: '/dsvgo',
    name: 'dsvgo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dsvgo.vue')
  },
  {
    path: '/kunst_test',
    name: 'KunstTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/KunstViewTest.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
