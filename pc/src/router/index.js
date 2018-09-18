import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/index',
      name:'index',
      component:Index
    }
  ]
})
