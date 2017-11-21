const User=require('../lib/User') // 用户模版

exports.register=(req,res,next)=>{
  let data=req.body
  let name=data.name
  let pass=data.pass

  let user=new User(data)

  user.create((err,result)=>{
    // 成功
    if(result){
      res.json({
        checkValue:true,
        token:result.token
      })
    }
    // 失败
    else{
      res.json({
        checkValue:false,
        token:result.token||''
      })
    }
  })
}

exports.login=(req,res,next)=>{
  let data=req.body
  let name=data.name
  let pass=data.pass

  let user=new User(data)

  user.authenticate(name,pass,(err,result)=>{
    // 成功
    if(result){
      res.json({
        checkValue:true,
        token:result.token
      })
    }
    // 失败
    else{
      res.json({
        checkValue:false,
        token:''
      })
    }
  })
}