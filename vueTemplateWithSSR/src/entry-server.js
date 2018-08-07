import createApp from './app'

export default context=>{
  return new Promise((resolve,reject)=>{
    const {app,router,store}=createApp()

    router.push(context.url)

    router.onReady(()=>{
      const matched=router.getMatchedComponents()
      if(!matched.length){
        return reject({code:404})
      }

      Promise.all(matched.map(Component=>{
        if(Component.asyncData){
          return Component.asyncData({
            store,route:router.currentRoute
          })
        }
      })).then(()=>{
        context.state=store.state
        resolve(app)
      }).catch(reject)
    },reject)
  })
}