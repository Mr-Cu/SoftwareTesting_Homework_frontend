import {
  createRouter,
  createWebHistory
} from 'vue-router'
const router = createRouter({
  history: createWebHistory(), 
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('@/components/layout.vue'),
      children: [{
          path: '/home',
          name: '首页',
          component: () => import('@/views/home.vue')
        },
        {
          path: '/triangle',
          name: '三角形问题',
          component: () => import('@/views/triangle.vue')
        },
        {
          path: '/telecom',
          name: '电信收费问题',
          component: () => import('@/views/telecom.vue')
        },
        {
          path: '/sales',
          name: '程序图',
          component: () => import('@/views/sales.vue')
        },
        {
          path: '/computer',
          name: '电脑销售问题',
          component: () => import('@/views/computerSell.vue')
        },
        {
          path: '/calendar',
          name: '万年历问题',
          component: () => import('@/views/calendar.vue')
        },
        {
          path: '/atmsystem',
          name: '销售系统',
          component: () => import('@/views/atmsystem.vue')
        },
        {
          path: '/unitTest',
          name: '非编程作业',
          component: () => import('@/views/unitTest.vue')
        },
      ],
      meta: {
        index: 1
      }
    },
  ]
})

export default router