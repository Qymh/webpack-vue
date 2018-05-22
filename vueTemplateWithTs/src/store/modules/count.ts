import {Module,ActionTree,MutationTree,GetterTree} from 'vuex'
import articles from '@/actions/articles'

interface IState{
  _infor:any[]
}

const state:IState={
  _infor:[]
}

const getters:GetterTree<IState,any>={
  infor:state=>state._infor
}

const mutations:MutationTree<IState>={
  _getInfor(state,value:any):void{
    state._infor=value
  }
}

const actions:ActionTree<IState,any>={
  async getInfor({commit},vm:object){
    const res=await articles.getArticles(vm)
    commit('_getInfor',res)
    return res
  }
}

const count:Module<IState,any>={
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default count