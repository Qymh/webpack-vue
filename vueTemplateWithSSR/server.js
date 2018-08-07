const path=require('path')
const express=require('express')
const {createBundleRenderer}=require('vue-server-renderer')
const ssrConfig=require('./webpack/config').ssr
const middleware=require('./webpack/middleware')
const templatePath=path.join(__dirname,'index.template.html')

const isProd=process.env.NODE_ENV==='production'

const app=express()

let renderer
let ready

ready=middleware(app,templatePath,
  (bundle,options)=>{
    options=Object.assign(ssrConfig,options)
    renderer=createBundleRenderer(bundle,options)
  }
)


app.get('*',(req,res)=>{
  ready.then(()=>{
    res.setHeader("Content-Type", "text/html")
    renderer.renderToString({url:req.url},(err,html)=>{
      console.log(req.url)
      console.log(err)
      res.send(html)
    })
  })
})

app.listen(8080)



