const path=require('path')
const os=require('os')

module.exports={
  lib:{
    resolve:file=>{
      return path.resolve(__dirname,'../..',file)
    },
    // 获取本机Ip数组
    getLocalIp:()=>{
      const os=require('os')
      const osControl=os.networkInterfaces()
      const netCategory=Object.keys(osControl)
      const ips=[]

      for(let category of netCategory){
        let osChunk=osControl[category][1]
        let address=osChunk.address
        if(address!=='127.0.0.1'){
          ips.push(address)
        }
      }

      return ips
    },
    generateMessages:(ips,port)=>{
      let msg='\n'
      for(let ip of ips){
        msg+=`\nyour application is listen at http://${ip}:${port}\n`
      }
      msg+=`\nyour browser will open at http://${ips[ips.length-1]||'127.0.0.1'}:${port}\n`
      return msg
    }
  },
  dev:{
    /** 路径 **/
    
    // 挂载路径
    publicPath:'/',
    // 静态文件夹地址
    contentBase:path.join(__dirname,'assets'),

    /** node端 **/

    // 进度
    progress:true,
    // 日志显示
    quiet:true,

    /** 客户端 **/
    
    // ip
    host:'127.0.0.1',
    // 端口
    port:8080,
    // 客户端日志等级
    clientLogLevel:'warning',
    // 404返回index
    historyApiFallback:true,
    // 自动打开浏览器
    open:true,
    // 不启用iframe模式
    inline:true,
    // 警告信息
    overlay:{
      errors:true,
      warnings:false
    },
    
    /** 杂项 **/
    // 源地图
    devtool:'cheap-module-eval-source-map',
    // 热加载
    hot:true,
    // 启用gzip压缩
    compress:false
  },
  prod:{
    // 挂载路径
    publicPath:'/',
    // 源地图
    devtool:'none',

    /** uglifyjs **/
    cache:true,
    parallel:true
  }
}