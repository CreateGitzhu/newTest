import {
  createVue,
  createRouter,
  createStore
} from '../../utils/index'


const routes = [{
  path: '/business/index',
  name: 'home',
  component: () => import('./Home.vue'),
}]

const modules = {
  home: {
    state: {
      userInfo: {}, // 用户信息
      isLogin:false,//是否已登录
    },
    mutations: {
      saveUserInfo(state, userInfo) {
        state.userInfo = userInfo
        state.isLogin = true //已登录
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
