import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import icon from './assets/icon/iconfont.js'
import store from './store/index'

// 开启错误提示
Vue.config.debug = true;

new Vue({
  store,
  router,
  el: '#appContainer',
  render: h => h(App)
})