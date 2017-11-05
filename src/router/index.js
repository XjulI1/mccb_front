import Vue from 'vue';
import Router from 'vue-router';
import Status from 'components/Status';
import App from 'App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    }, {
      path: '/status',
      name: 'Status',
      component: Status,
    },
  ],
});
