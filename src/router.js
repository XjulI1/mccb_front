import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import Status from '@/views/Status.vue'

Vue.use(Router)

export default new Router({
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
