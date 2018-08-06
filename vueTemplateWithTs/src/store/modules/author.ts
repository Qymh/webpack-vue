import { ActionTree } from 'vuex'
import authorAc from '@/actions/author'
import * as api from '@/lib/api'

const state = {
  _author: {
    name: '',
    age: '',
    sex: ''
  }
}

const getters = {
  author: (state: author.state) => state._author
}

const mutations = {
  _getAuthor(state: author.state, author: author.author) {
    state._author = author
  }
}

const actions: ActionTree<author.author, any> = {
  async getAuthor({ commit }) {
    await authorAc
      .getAuthor(api.getAuthor)
      .then((data: any) => {
        commit('_getAuthor', data[0])
      })
      .catch(() => { return })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
