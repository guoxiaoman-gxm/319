import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: () => import("../views/User/index"),
    children: [{
      path: 'login',
      name: 'login',
      component: () => import("../views/User/Login"),
      meta: {
        notLogin: true
      }
    }, {
      path: 'regist',
      name: 'regist',
      component: () => import("../views/User/Regist"),
      meta: {
        notLogin: true
      }
    }, {
      path: 'updatePass',
      name: 'updatePass',
      component: () => import("../views/User/UpdatePass"),
      meta: {
        notLogin: true
      }
    }],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
