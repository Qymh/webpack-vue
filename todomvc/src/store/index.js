import Vue from 'vue'
import Vuex from 'vuex'
import {state,mutations} from './mutations'
import plugins from './plugins'

Vue.use(vuex)

export default new Vuex.Store({
  state,
  mutations,
  plugins
})