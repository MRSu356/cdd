// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1.引入axios模块
import axios from 'axios'

// 引入所以element
import ElementUI from 'element-ui'
//babelrc设置了引入部分后就不需要引入所以的css
import 'element-ui/lib/theme-chalk/index.css'


Vue.prototype.$axios = axios;
Vue.use(ElementUI);//引入所有
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
