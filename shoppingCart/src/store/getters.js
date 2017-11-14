export const cartsAll=state=>{
  return state.cart.added.map(({id,quantity})=>{
    const product=state.products.all.find(p=>p.id===id)
    return{
      name:product.name,
      price:product.price,
      quantity
    } 
  })
}