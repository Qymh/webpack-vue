import Vue from 'vue'
import VeeValidate from 'vee-validate'
import {Validator} from 'vee-validate'

Vue.use(VeeValidate)

// 电话验证
const telValidate=()=>{
  
  const telIm=value=>new Promise(resolve=>{
    setTimeout(()=>{
      const verification=/^1[34578]\d{9}$/ // 验证器
      const bool=verification.test(value) // 返回的布尔值
      return resolve({
        valid:bool
      })
    },200)
  })

  Validator.extend('telIm',{
    validate:telIm,
    getMessage: (field, params, data) => data.message
  })
}

// 邮箱验证
const emailValidate=()=>{
  
  const emailIm=value=>new Promise(resolve=>{
    setTimeout(()=>{
      const verification=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 验证器
      const bool=verification.test(value) // 返回的布尔值
      return resolve({
        valid:bool
      })
    },200)
  })

  Validator.extend('emailIm',{
    validate:emailIm,
    getMessage: (field, params, data) => data.message
  })
} 

export default function run(){
  telValidate()
  emailValidate()
}