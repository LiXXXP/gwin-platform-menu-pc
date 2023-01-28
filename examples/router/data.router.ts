import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'

const systemRouter: Array<RouteConfig> = [
  {
    path: '/data',
    name: 'Data',
    component: Layout,
    meta: { title: '数据中心', icon: 'component', keepAlive: false },
    redirect: '/data/biz-dashboard',
    children: [
      {
        path: 'biz-dashboard',
        name: 'BizDashboard',
        component: () => import('@/views/data/biz-dashboard/index.vue'),
        meta: { title: '数据大屏', keepAlive: false, icon: 'about' }
      },
      {
        path: 'aed',
        name: 'Aed',
        component: () => import('@/views/data/aed/index.vue'),
        meta: { title: '公益板块数据', keepAlive: false, icon: 'guide' },
        redirect: '/data/aed/user',
        children: [
          {
            path: 'user',
            name: 'AedUser',
            component: () => import('@/views/data/aed/user.vue'),
            meta: { title: '用户统计', keepAlive: false }
          },
          {
            path: 'content',
            name: 'AedContent',
            component: () => import('@/views/data/aed/content.vue'),
            meta: { title: '内容统计', keepAlive: false }
          },
          {
            path: 'poi',
            name: 'AedPoi',
            component: () => import('@/views/data/aed/poi.vue'),
            meta: { title: 'POI统计', keepAlive: false }
          }
        ]
      },
      {
        path: 'all',
        name: 'All',
        component: () => import('@/views/data/all/index.vue'),
        meta: { title: '全系统运营数据', keepAlive: false, icon: 'edit' },
        redirect: '/data/all/user',
        children: [
          {
            path: 'user',
            name: 'AllUser',
            component: () => import('@/views/data/all/user.vue'),
            meta: { title: '用户统计', keepAlive: false }
          },
          {
            path: 'content',
            name: 'AllContent',
            component: () => import('@/views/data/all/content.vue'),
            meta: { title: '内容统计', keepAlive: false }
          },
          {
            path: 'poi',
            name: 'AllPoi',
            component: () => import('@/views/data/all/poi.vue'),
            meta: { title: 'POI统计', keepAlive: false }
          }
        ]
      }
    ]
  }
]

export default systemRouter
