import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login/login'
import registered from '../login/registered'
import Index from '../index/index'
import UserManagement from '../index/userManagement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{ 
        path: 'userManagement',
        name: 'userManagement', 
        component: UserManagement 
      }]
    }
  ]
})
