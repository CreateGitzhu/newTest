import { createVue, createRouter, createStore } from '../../utils/index'

import Home from './Home.vue'

const routes = [
  {
    path: '/business/index',
    name: 'home',
    component: Home,
  }
]

const modules = {
  home: {
    state: {
      userInfo: {}, // 用户信息
      currentClassName: '', // 当前的班级名称
    },
    mutations: {
      saveUserInfo (state, userInfo) {
        state.userInfo = userInfo
      },
      setCurrentClassName (state, name) { // 设置当前班级名称
        state.currentClassName = name
      },
    },
    actions: {

    },
    getters: {},
  },
}

createVue(
  createRouter(routes),
  createStore(modules)
)
