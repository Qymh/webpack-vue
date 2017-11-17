const User=require('../lib/User') // 用户模版

exports.register=(req,res,next)=>{
  
  let data=req.body
  let name=data.name
  let pass=data.pass

  let user=new User(data)

  user.create((err,result)=>{
    if(result){
      res.json('ok')
    }else{
      res.json('error')
    }
  })

  res.json('1')
}