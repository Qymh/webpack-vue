import * as types from '../mutation-types'

// 状态
const state={
  added:[]
}

// 突变
const mutations={
  [types.ADD_CART](state,{id}){
    const result=state.added.find(p=>p.id===id)
    if(!result){
      state.added.push({
        id,
        quantity:1
      })
    }else{
      result.quantity++
    }
  }
}

export default{
  state,
  mutations
}