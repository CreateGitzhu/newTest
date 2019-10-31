
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import { isProduction } from './env'
import { isObject } from './types'
import App from '../views/App.vue'

import '../assets/css/reset.scss'

Vue.use(Router)
Vue.use(ElementUI)
Vue.config.productionTip = false // 配置vue

createEventBus()

// 构建事件总线: 用来跨组件通信
function createEventBus() {
  const EventBus = new Vue()
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get: function () {
        return EventBus
      }
    }
  })
}

// 构造路由
export function createRouter(routes) {
  if (!Array.isArray(routes) || routes.length < 1) {
    throw new Error('routes 参数必须是非空数组')
  }

  const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history', // hash
    scrollBehavior(to, from, savedPosition) { // 记住滚动距离
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes,
  })

  // 钩子
  router.beforeEach((to, from, next) => {
    // console.log(from)
    next()
  })
  router.afterEach((to, from) => { })
  return router
}

// 构造vuex实例
export function createStore(modules) {
  if (isObject(modules) && Object.keys(modules).length > 0) {
    Vue.use(Vuex)

    return new Vuex.Store({
      strict: isProduction,
      modules
    })
  }
}

// 构造vue实例
export function createVue(router, store) {
  const config = {
    el: '#app',
    render: h => h(App),
  }
  if (router) {
    config.router = router
  }
  if (store) {
    config.store = store
  }
  return new Vue(config)
}
