import ax from './axios'
import {server} from './appconfig'

interface httpBase{
  (
    vm:object,
    api:string,
    data?:object
  ):Promise<any>
}

const get:httpBase=(vm,api,data)=>{
  return new Promise(resolve=>{
    ax.get(api,data).then((res:any)=>{
      resolve(res.data)
    })
  })
}

export default{
  get
}