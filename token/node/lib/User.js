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
    user.token=token
    let UserEntity=new UserModel(user)

    UserEntity.save()

    fn(null,true)
  })
}

// 验证用户的唯一性
User.checkSame=(name,fn)=>{
  User.SearchByName({name},(err,result)=>{
    console.log(result)
    if(result){
      return fn(null,null)
    }else{
      User.giveToken(name,fn)
    }
  })
}

// 通过名字搜索用户
User.SearchByName=(name,fn)=>{
  UserModel.findOne(name,(err,result)=>{
    console.log(result)
    if(err) return fn(err)
    fn(null,result)
  })
}

// // 登陆
// User.authenticate=(name,pass,fn)=>{
//   UserModel.findOne({name,pass}).then((err,result)=>{
//     if(err) fn(err)
//     return fn(null,result)
//   })
// }



// // 通过token搜索用户
// User.prototype.SearchByToken=(token,fn)=>{
//   UserModel.findOne({token}).then((err,result)=>{
//     if(err) fn(err)
//     return fn(null,result)
//   })
// }

// 给用户传递token
User.giveToken=(name,fn)=>{
  let token=jwt.sign({name:name},SECRET)
  fn(null,token)
}



module.exports=User
