import Vue from 'vue'
import VueCookies from 'vue-cookies'
import store from '@/store/store'

import Router from 'vue-router'

import Home from '@/views/Home.vue'
import NewOperation from '@/views/NewOperation'
import EditOperation from '@/views/EditOperation'

import RecurrOperation from '@/views/RecurrOperation'

import Stats from '@/views/Stats'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const cookieValue = VueCookies.get('userToken')

      if (cookieValue === null) {
        next('/login')
      } else {
        store.dispatch('fetchUserByID', cookieValue)
      }

      next()
    },
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
  }, {
    path: '/stats',
    name: 'Stats',
    component: Stats
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})
