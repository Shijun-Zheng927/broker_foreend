import Router from 'vue-router'
import MainPage from '../view/MainPage.vue'
import LoginPage from '../view/LoginPage.vue'
import RegisterPage from '../view/RegisterPage.vue'
import Overview from '../components/Overview.vue'
import PersonalPage from '../view/PersonalPage.vue'
import UserInfo from '../components/UserInfo.vue'
import UserBanl from '../components/UserBanl.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/MainPage',
      component: MainPage,
      redirect: '/MainPage/Overview',
      children: [
        {path: 'Overview', component: Overview}
      ]
    },
    {
      path:'/',
      redirect:'/MainPage'
    },
    {
      path: '/LoginPage',
      component: LoginPage
    },
    {
      path: '/RegisterPage',
      component: RegisterPage
    },
    {
      path: '/PersonalPage',
      component: PersonalPage,
      redirect: '/PersonalPage/UserInfo',
      children: [
        {path: 'UserInfo', component: UserInfo},
        {path: 'UserBanl', component: UserBanl},
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/LoginPage'||to.path === '/RegisterPage') {
    next();
  } else {
    let token = window.sessionStorage.getItem("token");
 
    if (!token) {
      next('/LoginPage');
    } else {
      next();
    }
  }
});
export default router