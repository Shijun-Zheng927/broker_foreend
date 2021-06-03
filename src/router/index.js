import Router from 'vue-router'
import MainPage from '../view/MainPage.vue'
import LoginPage from '../view/LoginPage.vue'
import RegisterPage from '../view/RegisterPage.vue'
import Overview from '../components/Overview.vue'
import PersonalPage from '../view/PersonalPage.vue'
import UserInfo from '../components/UserInfo.vue'
import UserBanl from '../components/UserBanl.vue'
import MdPage from '../view/MdPage.vue'
import ShopPanel from '../components/ShopPanel.vue'
import ConsolePage from '../view/ConsolePage.vue'
import BucketPanel from '../components/BucketPanel.vue'
import BucketList from '../components/BucketList.vue'
import FileManager from '../components/FileManager.vue'
import UpFile from '../components/UpFile.vue'
import AdminLogin from '../view/AdminLogin.vue'
import BucketAbout from '../components/BucketAbout.vue'
import RwPolicy from '../components/RwPolicy.vue'
import BucketTag from '../components/BucketTag.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/MainPage',
      component: MainPage,
      redirect: '/MainPage/Overview',
      children: [
        {path: 'Overview', component: Overview},
        {path: 'ShopPanel', component: ShopPanel}
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
    {
      path: '/ConsolePage',
      name: 'ConsolePage',
      component: ConsolePage,
      redirect: '/ConsolePage/BucketList',
      children: [
        {
          path: 'BucketPanel', 
          component: BucketPanel, 
          name: 'BucketPanel',
          redirect: '/ConsolePage/BucketPanel/BucketAbout',
          children: [
            {path: 'FileManager', component: FileManager, name: 'FileManager'},
            {path: 'UpFile', component: UpFile, name: 'UpFile'},
            {path: 'BucketAbout', component: BucketAbout, name: 'BucketAbout'},
            {path: 'RwPolicy', component: RwPolicy, name: 'RwPolicy'},
            {path: 'BucketTag', component: BucketTag, name: 'BucketTag'},
          ]
        },
        {path: 'BucketList', component: BucketList, name: 'BucketList'},
        // {path: 'FileManage', component: FileManage, name: 'FileManage'}
      ]
    },
    {
      path: '/MdPage',
      component: MdPage
    },
    {
      path: '/AdminLogin',
      component: AdminLogin
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/LoginPage'||to.path === '/RegisterPage') {
//     next();
//   } else {
//     let token = window.sessionStorage.getItem("token");
 
//     if (!token) {
//       next('/LoginPage');
//     } else {
//       next();
//     }
//   }
// });
export default router