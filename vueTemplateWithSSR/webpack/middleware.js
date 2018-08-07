const fs=require('fs')
const path=require('path')
const MFS=require('memory-fs')
const webpack=require('webpack')
const webpackDevMiddleware=require('webpack-dev-middleware')
const webpackHotMiddleware=require('webpack-hot-middleware')
const clientConfig=require('./webpack.client')
const serverConfig=require('./webpack.server')
const dev=require('./config/index').dev
const readFile=require('./config/index').lib.readFile

function middleware(app,templatePath,cb){
  return new Promise((resolve,reject)=>{
    let bundle
    let template
    let clientManifest
  
    const update=()=>{
      if(bundle&&clientManifest){
        resolve()
        cb(bundle,{
          templatePath,
          clientManifest
        })
      }
    }
    
    // index.html改变
    template=fs.readFileSync(templatePath,'utf-8')
    fs.watchFile(templatePath,(cur,pre)=>{
      template=fs.readFileSync(templatePath,'utf-8')
      console.log('index.html template updated')
      update()
    })
  
    // 热加载
    clientConfig.entry.app=['webpack-hot-middleware/client',clientConfig.entry.app]
    // dev模式下不支持chunkhash
    clientConfig.output.filename='[name].js'
    clientConfig.plugins.push(
      // 热加载插件
      new webpack.HotModuleReplacementPlugin(),
      // 出错直接跳过
      new webpack.NoEmitOnErrorsPlugin()
    )
  
    // 开发中间件
    const clientCompiler=webpack(clientConfig)
    const devMiddleware=webpackDevMiddleware(clientCompiler,{
      publicPath:dev.publicPath,
    })
    app.use(devMiddleware)
    clientCompiler.plugin('done',stats=>{
      clientManifest=JSON.parse(readFile(
        devMiddleware.fileSystem,
        'vue-ssr-client-manifest.json'
      ))
      update()
    })
  
    // 热加载中间件
    const hotMiddleware=webpackHotMiddleware(clientCompiler)
    app.use(hotMiddleware)
  
    // 服务器热加载
    const serverCompiler=webpack(serverConfig)
    const mfs=new MFS()
    serverCompiler.outputFileSystem=mfs
    serverCompiler.watch({},(err,stats)=>{
      if (err) throw err
      stats = stats.toJson()
      if (stats.errors.length) return
      bundle=JSON.parse(readFile(mfs,'vue-ssr-server-bundle.json'))
      update()
    })
  })
}

module.exports=middleware