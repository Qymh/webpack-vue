const mongoose=require('mongoose')
const jwt=require('jsonwebtoken') // token注册工具
const SECRET='Qymh'
const db=mongoose.connect('mongodb://127.0.0.1:27017/token')
const Schema=mongoose.Schema

const UserSchema=new Schema({
  name:Schema.Types.Mixed,
  pass:Schema.Types.Mixed,
  token:Schema.Types.Mixed
})

const UserModel=mongoose.model('user',UserSchema) 

function User(obj){
  for(var key in obj){
    this[key]=obj[key]
  }
}

// 创建用户
User.prototype.create=function(fn){
  let user=this
  let name=user.name
  User.checkSame(name,(err,token)=>{
    if(err) return fn(err)
    // 用户创建成功
    if(token){
      user.token=token
      let UserEntity=new UserModel(user)
      UserEntity.save()
      fn(null,true)
    }
    // 用户创建失败
    else{
      fn(null,false)
    }

  })
}

// 验证用户的唯一性
User.checkSame=(name,fn)=>{
  User.SearchByName({name},(err,result)=>{
    // 用户存在
    if(result){
      fn(null,null)
    }
    // 用户不存在
    else{
      User.giveToken(name,fn)
    }
  })
}

// 通过名字搜索用户
User.SearchByName=(name,fn)=>{
  UserModel.findOne(name,(err,result)=>{
    if(err) return fn(err)
    fn(null,result)
  })
}

// 给用户传递token
User.giveToken=(name,fn)=>{
  let token=jwt.sign({name:name},SECRET)
  fn(null,token)
}

// 登陆
User.prototype.authenticate=(name,pass,fn)=>{
  UserModel.findOne({name,pass},(err,result)=>{
    if(err) return fn(err)
    fn(null,result)
  })
}

// 通过token搜索用户
User.SearchByToken=(token,fn)=>{
  UserModel.findOne({token},(err,result)=>{
    if(err) fn(err)
    return fn(null,result)
  })
}

module.exports=User
