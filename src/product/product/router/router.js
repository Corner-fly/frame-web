import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules/index' // 引入业务逻辑模块
Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: RouterConfig
  })