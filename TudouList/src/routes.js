import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './components/header.vue';
import homePage from './views/home.vue';
import detailPage from './views/detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/detail',
      component: detailPage
    }
  ]
})