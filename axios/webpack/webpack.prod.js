const webpack=require('webpack')
const merge=require('webpack-merge')
const common=require('./webpack.common')
const uglify=require('uglifyjs-webpack-plugin')

module.exports=merge(common,{
  entry:{
    main:'./src/index.js',
    vendor:['zepto','vue','vue-router']
  },
  output:{
    filename:'[name].[chunkhash].js',
  },
  // 生产环境下
  devtool:'#source-map',
  plugins:[
    // 清除相同模块
    new webpack.optimize.CommonsChunkPlugin({
      name:['vendor','manifest']
    }),
    // 树摇动
    new uglify(),
    // 设置环境
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('production')
      }  
    }),
    // 设置缓存hash
    new webpack.HashedModuleIdsPlugin()
  ]
})