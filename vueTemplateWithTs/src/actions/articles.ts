import * as api from '@/lib/api'
import http from '@/lib/httpFn'

interface getArticlesBase{
  (vm:object):Promise<any[]>
}

const getArticles:getArticlesBase=(vm)=>{
  return new Promise((resolve,reject)=>{
    http.get(vm,api.articles).then(data=>{
      resolve(data)
    }).catch((err:string)=>{
      reject(err)
    })
  })
}

export default{
  getArticles
}