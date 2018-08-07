import createApp from './app'

const {app,router,store}=createApp()

if (window.__INITIAL_STATE__){
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(()=>{
  router.beforeResolve((to,from,next)=>{
    const matched=router.getMatchedComponents(to)
    const preMatched=router.getMatchedComponents(from)

    let diffed=false

    const activated=matched.filter((c,i)=>{
      return diffed||(diffed=(preMatched[i]!==c))
    })

    if(!activated.length){
      return next()
    }

    Promise.all(activated.map(c=>{
      if(c.asyncData){
        return c.asyncData({store,route:to})
      }
    })).then(()=>{
      next()
    }).catch(next)
  })

  console.log(app)

  app.$mount('#app')
})