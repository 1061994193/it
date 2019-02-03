// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 设置挂载统一路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// 挂在到vue原型中
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Element)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
