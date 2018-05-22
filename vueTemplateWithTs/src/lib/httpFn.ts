import {AxiosResponse,AxiosError} from 'axios'
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
  return new Promise((resolve,reject)=>{
    ax.get(api,data).then((res:AxiosResponse)=>{
      resolve(res.data)
    }).catch((res:AxiosError)=>{
      reject(res.code)
    })
  })
}

export default{
  get
}