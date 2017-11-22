import {tool} from './utils'
import {config} from './appconfig'

// 缓存类型
const cacheType=config.cacheType

export default{
  /**
   * 设置token
   * @param {String} token 
   */
  setAuthToken(token){
    if(tool.isNullOrEmpty(token)){
      return
    }
    window[cacheType].setItem('token',token)
  },

  /**
   * 获取token
   */
  getAuthToken(){
    let token=window[cacheType].getItem('token')
    if(tool.isNullOrEmpty(token)){
      return ''
    }
    return token
  },

  /**
   * 设置id
   * @param {String} profileid 
   */
  setProfileId(profileid){
    window[cacheType].setItem('profileid',profileid)
  },

  /**
   * 获取id
   */
  getProfileId(){
    window[cacheType].getItem('profileid')
  },

  /**
   * 设置登陆名字
   * @param {String} name 
   */
  setLoginName(name){
    window[cacheType].setItem('loginname',name)
  },

  /**
   * 获取登陆名字
   */
  getLoginName(){
    window[cacheType].getItem('loginname')
  },

  /**
   * 检查是否登陆
   */
  checkIsAuthed(){
    if(this.getAuthToken()){
      return true
    }
    return false
  },

  /**
   * 注销登陆
   */
  signOut(){
    window[cacheType].removeItem('token')
  }
}