import shop from '../../api/shop'
import * as types from '../mutation-types'

// 状态
const state={
  all:[]
}

// 获取
const getters={
  productsAll:state=>state.all
}

// 突变
const mutations={
  [types.RECIVE_PRODUCTS](state,{products}){
    state.all=products
  },
  [types.ADD_CART](state,{id}){
    state.all.find(p=>p.id===id).quantity--
  }
}

// 操作
const actions={
  getAllProducts({commit}){
    shop.getProducts(products=>{
      commit(types.RECIVE_PRODUCTS,{products})
    })
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}