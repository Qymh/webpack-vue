const SERVER_URL='http://127.0.0.1:8080/'
const REGISTER_URL=SERVER_URL+'register'
const LOGIN_URL=SERVER_URL+'login'

import axios from 'axios'

export default{

  data:{
    // 认证结果
    authenticated:false
  },

  /**
   * 注册函数
   * @param {Object} context 环境
   * @param {Object} info 用户数据对象
   * @param {String} message 返回的信息名称
   */
  register(context,info,message){
    axios.post(REGISTER_URL,info).then(res=>{
      let checkValue=res.data.checkValue
      if(checkValue){
        let token=res.data.token
        localStorage.setItem('token',token) // 添加token到离线缓存
        this.authenticated=true // 认证成功
        context.$router.push('/home') // 返回首页
      }else{
        context[message]='相同的名字'
        context.name=''
        context.pass=''
      }
    },res=>{
      context[message]='请求错误,稍后重试'
    })
  },

  /**
   * 登陆函数
   * @param {Object} context 环境
   * @param {Object} info 用户数据对象
   * @param {String} message 返回的信息名称
   */
  login(context,info,message){
    axios.post(LOGIN_URL,info).then(res=>{
      let checkValue=res.data.checkValue
      if(checkValue){
        let token=res.data.token
        localStorage.setItem('token',token) // 添加token到离线缓存
        this.authenticated=true // 认证成功
        context.$router.push('/home') // 返回首页
      }else{
        context[message]='密码错误'
        context.name=''
        context.pass=''
      }
    },res=>{
      context[message]='请求错误,稍后重试'
    })
  },

  /**
   * 获取头部
   */
  getAuthHeader(){
    return {
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    }
  },

  /**
   * 检查是否登陆
   */
  checkAuth(){
    let auth=localStorage.getItem('token')
    if(auth){
      this.authenticated=true
    }else{
      this.authenticated=false
    }
  },

  /**
   * 清楚缓存
   */
  clearAuth(){
    this.checkAuth()
    if(this.authenticated){
      localStorage.removeItem('token')
    }
    window.location.reload()
  }
}