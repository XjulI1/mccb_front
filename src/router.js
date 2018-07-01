import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Status from '@/components/Status.vue'

Vue.use(Router)

export default new Router({
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/mccb_ng/'
    : '/',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    }
  ]
})
