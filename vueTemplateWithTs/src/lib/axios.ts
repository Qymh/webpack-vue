import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios'
import {server} from './appconfig'

const isDev=process.env.NODE_ENV==='development'

const ax:AxiosInstance=axios.create({
  baseURL:server.domain,
  timeout:20000
})

ax.interceptors.request.use(
  (config:AxiosRequestConfig)=>{
    console.log(config)
    if(isDev){
      console.log(`serverApi:${config.baseURL}${config.url}`)
    }
    return config
  }
)

ax.interceptors.response.use(
  (response:AxiosResponse)=>{
    if(isDev){
      console.log(`--response data--`)
      console.log(response.data)
    }
    return response
  }
)

export default ax