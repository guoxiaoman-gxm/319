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
        },
        ],
    },
    {
        path: '/student',
        component: () => import('../views/Student/sHome.vue'),
        children:[
            //个人信息
            {
                path: 'sMine',
                name: 'sMine',
                component: () => import('../views/Student/sMine.vue')
            },
            //开始选题
            {
                path: 'search',
                name: 'search',
                component: () => import('../views/Student/search.vue'),
            },
            //题目列表
            {
                path: 'queList',
                name: 'queList',
                component: () => import('../views/Student/queList.vue')
            },
            //已选题目
            {
                path: 'haveChoosed',
                name: 'haveChoosed',
                component: () => import('../views/Student/haveChoosed.vue')
            },
            //学生查询所有的实训信息
            {
                path: 'allTrains',
                name: 'allTrains',
                component: () => import('../views/Student/allTrains.vue')
            },
            //所有题目信息
            {
                path: 'allTitleList',
                name: 'allTitleList',
                component: () => import('../views/Student/allTitleList.vue')
            },
            //修改密码
            {
                path: 'changepwd',
                name: 'changepwd',
                component: () => import('../views/Student/changepwd.vue')
            },
            {
                path: 'squit',
                name: 'squit',
                component: () => import('../views/Student/squit.vue')
            },
        ]
    },

    {
        path:'/teacher',
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
            },
            {
                path:'quit',
                name:'quit',
                component:()=>import('../views/Teacher/Quit')
            },
            {
                path:'edit',
                name:'edit',
                component:()=>import('../views/Teacher/edit')
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
