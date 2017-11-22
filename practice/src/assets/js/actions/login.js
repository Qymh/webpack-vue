import {http} from '../lib/utils'
import auth from '../lib/auth'
import * as api from '../lib/api'

export default{
  doPassAuth(vm,bindToWx){
    let lname=vm.$data.loginname
    let lpass=vm.$data.password
    let user={
      userName:lname,
      password:lpass
    }
    let _this=this

    http.post(vm,api.login,user,(res)=>{
      auth.setAuthToken(res.data.token)
      auth.setProfileId(res.data.profileId)
      auth.setLoginName(lname)
    })
  }
}