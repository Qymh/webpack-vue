// 购物车api

const _products=[
  {id:'1',name:'product1',price:'12.5',quantity:'5'},
  {id:'2',name:'product2',price:'13.5',quantity:'8'},
  {id:'3',name:'product3',price:'10.5',quantity:'3'}
]

export default{
  // 获取购物车
  getProducts(cb){
    setTimeout(()=>{
      cb(_products)
    },100)
  }
}