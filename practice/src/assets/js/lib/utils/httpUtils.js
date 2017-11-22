import axios from 'axios'
import {tool,encrypt} from './index'
import auth from '../auth'
import * as appconfig from '../appconfig'

/**
 * 为data添加参数
 * @param {JSON} data JSON数据 
 */
function addParams(data){
  if(tool.isNullOrEmpty(data)){
    data={}
  }

  if(typeof data !=='object'){
    console.error('data必须是JSON对象')
  }

  data.timestamp=tool.getTiming() // 登陆时间
  data.token=auth.getAuthToken() // token
  data.profileId=auth.getProfileId() // id
  data.signstr=encrypt.getSignStr(data) // 签名

  return data
}

/**
 * 请求模版
 * @param {Object} vm 环境
 * @param {String} api 请求地址
 * @param {Object} data JSON数据
 * @param {Function} success 成功函数
 * @param {Function} error 错误函数
 * @param {*} bizError 
 * @param {String} loaderType 加载ui的样式
 * @param {String} loaderText 加载ui里的内容
 */
function postCommon(vm,api,data,success,error,bizError,loaderType,loaderText){
  let domain=appconfig.api.domain
  let url=domain+api

  // 调试模式下输出api地址和发送的值
  if(appconfig.config.debug){
    console.log(`request url ${url}`)
    console.log(`request data ${JSON.stringify(data)}`)
  }

  // 加载Ui
  $.alert(loaderType)

  // 发送post请求
  vm.$http.post(url,data).then(res=>{
    // 去掉加载
    $.removeAlert()

    // 调试模式下输出获取到的值
    if(appconfig.config.debug){
      console.log(`request data ${JSON.stringify(res.data)}`)
    }

    // 错误
    if (res.data.error_code < 0) {
      if (res.data.error_code == -12 || res.data.error_code == -15) {
        auth.signOut()
      } else {
        //不自定义处理业务逻辑
        if (bizError == undefined || bizError === null) {
          $.alert('warning',res.data.error_message);
        } else {
          bizError(res.data);
        }
      }
    }
    else {
      success(res.data);
    }
  },res=>{
    // 去掉加载
    $.removeAlert()

    // 返回错误
    if(res.status===0){
      $.alert('warning','网络链接异常')
    }else{
      $.alert('warning',`网络错误,异常代码${res.status}`)
    }

    // 执行错误函数
    if(error){
      error(res)
    }
  })
}

/**
 * 普通请求
 * @param {Object} vm 环境
 * @param {String} api 请求地址
 * @param {Object} data JSON数据
 * @param {Function} success 成功函数
 * @param {Function} error 错误函数
 * @param {*} bizError 
 * @param {String} loaderType 加载ui的样式
 * @param {String} loaderText 加载ui里的内容
 */
function post(vm,api,data,success,error,bizError,loaderType,loaderText){
  data=addParams(data)
  postCommon(vm,api,data,success,error,bizError,loaderType,loaderText)
}

export default{
  post
}