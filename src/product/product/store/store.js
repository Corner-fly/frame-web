import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import emey from './modules/emey.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
      home,
      emey
  }
})
