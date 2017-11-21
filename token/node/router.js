const express=require('express')
const router=express.Router()
const auth=require('./routes/auth')
const user=require('./routes/user')

module.exports=router

router.post('/register',auth.register)
      .post('/login',auth.login)

      .post('/user',user.getInfor)