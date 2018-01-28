import Vue from 'vue';
import Router from 'vue-router';

import homePage from './views/home.vue';
import detailPage from './views/detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/view/:id',
      component: homePage
    }
  ]
})