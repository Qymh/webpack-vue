import * as api from '../lib/api'
import http from '../lib/httpFn'

interface getArticlesBase{
  (vm:object):Promise<any[]>
}

const getArticles:getArticlesBase=(vm)=>{
  return new Promise(resolve=>{
    http.get(vm,api.articles).then(data=>{
      resolve(data)
    })
  })
}

export default{
  getArticles
}