const path=require('path')

module.exports={
  lib:{
    resolve:file=>{
      return path.resolve(__dirname,'../..',file)
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