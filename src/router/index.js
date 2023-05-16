import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ex1 from '../views/Pages/Ex1.vue'
import Ex2 from '../views/Pages/Ex2.vue'
import Ex12_2 from '../views/Pages/Ex12_2.vue'
import test from '../views/Pages/test.vue'
import SCSS from '../views/Pages/SCSS.vue'
import RWD from '../views/Pages/RWD.vue'
import dialog from '../views/Pages/dialog.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Ex1',
      name: 'excercise 1',
      component: Ex1,
    },
    {
      path: '/Ex2',
      name: 'excercise 2',
      component: Ex2,
    },
    {
      path: '/Ex12_2',
      name: 'excercise 12.2',
      component: Ex12_2,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/scss',
      name: 'SCSS',
      component: SCSS,
    },
    {
      path: '/rwd',
      name: 'RWD',
      component: RWD,
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog,
    }
  ]
})

export default router
