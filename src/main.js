// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI);

// 引用axios，并设置基础URL为后端服务api地址
// var axios = require('axios')
// axios.defaults.baseURL = "http://127.0.0.1:8080/hotel"
// axios.interceptors.request.use(config=>{
//   console.log(config)
//   config.headers.Authorization = window.sessionStorage.getItem("token")
//   return config
// })

// axios.interceptors.response.use(
//   response => {
//    return response;
//   },
//   error => {
//   if(error.response.status==999){
//     if(window.sessionStorage.getItem('token')){
//       window.sessionStorage.removeItem('token');
//       window.sessionStorage.removeItem('username');
//       window.sessionStorage.removeItem('avatar');
//     }
    
//     router.replace({
//       path:'/login',
//       query:{redirect:router.currentRoute.fullPath}
//     })
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
