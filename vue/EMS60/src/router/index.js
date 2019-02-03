import Vue from 'vue'
import Router from 'vue-router'
// 路由
import Login from '@/components/login/login.vue'
// 引入css样式
import '@/assets/css/index.css'

Vue.use(Router)


var router = new Router({
  routes: [
    {name: 'login', path: '/login', component: Login}
  ]
})

export default router