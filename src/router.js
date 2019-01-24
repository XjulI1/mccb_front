import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import NewOperation from '@/views/NewOperation'
import EditOperation from '@/views/EditOperation'

import RecurrOperation from '@/views/RecurrOperation'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/newOperation',
      name: 'Nouvelle opération',
      component: NewOperation
    }, {
      path: '/editOperation/:id',
      name: 'Edition opération',
      component: EditOperation
    }, {
      path: '/recurrOperation',
      name: 'Opérations récurrentes',
      component: RecurrOperation
    }]
  }]
})
