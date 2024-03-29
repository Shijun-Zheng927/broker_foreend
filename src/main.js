// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import Router from 'vue-router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import APITemplate from './components/APITemplate.vue'
import getHref from './assets/js/getHref'

Vue.use(mavonEditor)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Router);
Vue.use(getHref);
Vue.component('api-template',APITemplate);

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 引用axios，并设置基础URL为后端服务api地址
// var axios = require('axios')
axios.defaults.baseURL = '/apis'
axios.interceptors.request.use(config=>{
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})

axios.interceptors.response.use(
  response => {
   return response;
  },
  error => {
  if(error.response.status==999){
    if(window.sessionStorage.getItem('token')){
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('phone');
      window.sessionStorage.removeItem('avatar');
    }
    
    router.replace({
      path:'/LoginPage',
      query:{redirect:router.currentRoute.fullPath}
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
