const express=require('express')
const router=express.Router()
const auth=require('./routes/auth')

module.exports=router

router.post('/register',auth.register)