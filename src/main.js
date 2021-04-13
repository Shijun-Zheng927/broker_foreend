// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import Element from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, axios)
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
