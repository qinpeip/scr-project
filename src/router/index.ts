import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login"*/ '../Login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/*webpackChunkName: Home*/ '../Home'),
      redirect: {name: 'smokeParam'},
      // children: [
      //   {
      //     path: 'smokeParam',
      //     name: 'smokeParam',
      //     component: () => import(/*webpackChunkName: SmokeParam */'../views/SmokeParam'),
      //     meta: {
      //       title: '烟气参数',
      //       label: 'smokeParam'
      //     }
      //   }
      // ]
    }
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
