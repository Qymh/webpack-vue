import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myStore: 123
  },
  getters: {
    computedMyStore: state => state.myStore + 1
  },
  mutations: {
    _changeMyStore(state, type) {
      type === 'increase' ? state.myStore++ : state.myStore--
    }
  },
  actions: {
    changeMyStore({ commit }, type) {
      commit('_changeMyStore', type)
    }
  }
})
