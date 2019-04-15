import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login/login'
import registered from '../login/registered'
import Index from '../index/index'
import UserManagement from '../index/userManagement'
import UpdateUser from '../index/updateUser'
import QbManagement from '../index/qbManagement'
import AnswerCenter from '../index/answerCenter';
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
      },{
        path:'/updateUser/:id',
        name:'updateUser',
        component:UpdateUser
      },
      {
        path:'qbManagement',
        name:'qbManagement',
        component:QbManagement
      },
      {
        path:'AnswerCenter',
        name:'AnswerCenter',
        component:AnswerCenter
      }
    ]
    }
  ]
})
