import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../view/MainPage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/MainPage',
      component: MainPage
    },
    {
      path:'/',
      redirect:'/MainPage'
    },
  ]
})
export default router