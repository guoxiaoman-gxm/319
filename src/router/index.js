import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login/Register')
  },
  {
    path: '/findpwd',
    name: 'Findpwd',
    component: () => import('../views/Login/Findpwd')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
