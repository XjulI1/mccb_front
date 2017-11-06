import Vue from 'vue';
import Router from 'vue-router';
import Status from 'components/Status';
import Main from 'components/Main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    }, {
      path: '/status',
      name: 'status',
      component: Status,
    },
  ],
});
