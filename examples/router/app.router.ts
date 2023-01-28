import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'

const appRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: 'dashboard',
      noCache: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  }
]

export default appRoutes
