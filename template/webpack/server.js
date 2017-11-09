const webpackDevServer=require('webpack-dev-server')
const webpack=require('webpack')
const open=require('open')
const domain='192.168.0.104'
const port='8080'

const config=require('./webpack.server')
const options={
  contentBase:'./dist',
  hot:true,
  host:domain
}

webpackDevServer.addDevServerEntrypoints(config,options)
const compiler=webpack(config)
const server=new webpackDevServer(compiler,options)

server.listen(port,domain,()=>{
  console.log(`dev server is listen ${port}`)
})

open(`${domain}:${port}`,'chrome')