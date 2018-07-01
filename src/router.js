import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Status from '@/views/Status.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    }
  ]
})
