import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';
// import i18n from 'i18n'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1' // to /${i18n.locale}
  },
  {
    path: '/tabs', //maybe remove slashes
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'tab3/form',
        component: () => import('@/views/Form.vue')
      },
      {
        path: 'tab3/filter',
        component: () => import('@/views/SingleRecipeView.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
