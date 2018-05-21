import axios from 'axios'
import {server} from './appconfig'

const isDev=process.env.NODE_ENV==='development'

const ax:any=axios.create({
  baseURL:server.domain
})

ax.interceptors.request.use(
  (config:any)=>{
    if(isDev){
      console.log(`serverApi:${config.baseURL}${config.url}`)
    }
    return config
  }
)

ax.interceptors.response.use(
  (response:any)=>{
    if(isDev){
      console.log(`--response data--`)
      console.log(response.data)
    }
    return response
  }
)

export default ax