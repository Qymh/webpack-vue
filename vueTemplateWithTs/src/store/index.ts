import Vue from 'vue'
import Vuex,{ActionTree,MutationTree, Action} from 'vuex'

Vue.use(Vuex)

interface IState{
  _count:number
}

const state:IState={
  _count:0
}

const getters={
  count:(state:IState)=>state._count
}

const mutations:MutationTree<IState>={
  '_changeCount'(state:IState):void{
    state._count++
  }
}

const actions:ActionTree<IState,any>={
  'changeCount'({commit}):void{
    commit('_changeCount')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})