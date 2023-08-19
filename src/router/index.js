import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/About.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/components/Setting.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue'),
    },
  ]
})

export default router
