const express=require('express')
const webpack=require('webpack')
const webpackDevMiddleware=require('webpack-dev-middleware')
const webpackHotMiddleware=require('webpack-hot-middleware')
const history=require('connect-history-api-fallback')
const webpackConfig=require('./webpack.dev')
const open=require('open')

const app=express()
// 调用配置生成compiler
const compiler=webpack(webpackConfig) 

// 域名端口
const domain='192.168.8.221'
const port='8080'

// 服务端输出
const devMiddleware=webpackDevMiddleware(compiler,{
  publicPath:webpackConfig.output.publicPath,
  quiet: true // 删除cli控制台信息
})

// 热加载
const hotMiddleware=webpackHotMiddleware(compiler,{
  log:false,
  heartbeat: 2000
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


// html5历史 api
app.use(history())

// webpack服务端输出
app.use(devMiddleware)

// 热加载
app.use(hotMiddleware)

// 静态挂载
app.use(express.static(__dirname))

module.exports=app.listen(port,domain,()=>{
  // cli日志
  console.log(`Server is listening on ${domain} ${port}`)
  // 默认打开谷歌浏览器
  open(`${domain}:${port}`,'chrome')
})