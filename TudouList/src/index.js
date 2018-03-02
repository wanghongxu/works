import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './routes.js'
import icon from './assets/icon/iconfont.js'
import store from './store/index'

Vue.use(ElementUI)

// 开启错误提示
Vue.config.debug = true;

new Vue({
  store,
  router,
  el: '#appContainer',
  render: h => h(App)
})