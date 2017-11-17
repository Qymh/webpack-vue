const express=require('express')
const bodyParser=require('body-parser')
const router=require('./router')
const app=express()

const domain='127.0.0.1'
const port=8080

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  next()
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/',router)

app.listen(port,domain,()=>{
  console.log(`server is listening ${domain}:${port}`)
})