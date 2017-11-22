import {tool} from './index'
import * as encrypt from '../sha1'

/**
 * 将JSON数据转义成规定连接的字符串
 * @param {Object} data 
 */
function getParamsStr(data){
  let oldParams=[]

  for(let key in data){
    oldParams.push(key)
  }

  let newParams=tool.sort(oldParams) // 将参数排序

  let parserStr=''

  for(let i=0;i<newParams.length;i++){
    let key=newParams[i]
    let value=data[key]
    if(!tool.isNullOrEmpty(value)){
      if(typeof value ==='object'){
        value=JSON.stringify(value)
      }
      parserStr+=`&${key}=${value}`
    }
  }

  if(parserStr.length>0){
    parserStr=parserStr.slice(1)
  }

  return parserStr
}

function getSignStr(data){
  let parserStr=getParamsStr(data)
  if(!tool.isNullOrEmpty(parserStr)){
    return encrypt.sha1(parserStr)
  }
  return ''
}

export default{
  getSignStr
}