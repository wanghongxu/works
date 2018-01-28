import Vue from 'vue'
import Vuex from 'vuex'
import viewList from './modules/view-list'
import customizedList from './modules/customized-list'
import todoList from './modules/todolist'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

  modules: {
    viewList,
    customizedList,
    todoList
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})