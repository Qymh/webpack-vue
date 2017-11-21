const User=require('../lib/User') // 用户模版

exports.getInfor=(req,res,next)=>{
  let token=req.headers['authorization']
  User.SearchByToken(token,(err,result)=>{
    res.json(result.name)
  })
}