import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/addQuestion',
        name: 'addQuestion',
        component: () => import('../views/Teacher/addQuestion.vue')
    },
    {
        path: '/',
        component: () => import('../views/Student/sHome.vue'),
        children:[
            {
                path: 'sLogin',
                name: 'sLogin',
                component: () => import('../views/Student/sLogin.vue')
            },
            //查询题目
            {
                path: 'search',
                name: 'search',
                component: () => import('../views/Student/search.vue'),
            },
            //个人信息
            {
                path: 'sMine',
                name: 'sMine',
                component: () => import('../views/Student/sMine.vue')
            },
            //开始选题
            {
                path: 'choose',
                name: 'choose',
                component: () => import('../views/Student/choose.vue'),
            },
            //申请换题
            {
                path: 'change',
                name: 'change',
                component: () => import('../views/Student/change.vue')
            },
            //已选题目
            {
                path: 'haveChoosed',
                name: 'haveChoosed',
                component: () => import('../views/Student/haveChoosed.vue')
            },
            //修改密码
            {
                path: 'changepwd',
                name: 'changepwd',
                component: () => import('../views/Student/changepwd.vue')
            }
        ]
    },
    {
        path:'/Teacher',
        component: () => import('../views/Teacher/tHome.vue'),
        children:[
            {
                path: 'tMine',
                name: 'tMine',
                component: () => import('../views/Teacher/tMine.vue')
            },
            {
                path: 'submit',
                name: 'submit',
                component: () => import('../views/Teacher/submit.vue')
            },
            {
                path: 'tQuestion',
                name: 'tQuestion',
                component: () => import('../views/Teacher/tQuestion.vue')
            },
            {
                path: 'tChangePwd',
                name: 'tChangePwd',
                component: () => import('../views/Teacher/tChangePwd.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
