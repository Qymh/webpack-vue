const webpack=require('webpack')
const merge=require('webpack-merge')
const common=require('./webpack.common')
const uglify=require('uglifyjs-webpack-plugin')

module.exports=merge(common,{
  // 生产环境下
  devtool:'source-map',
  plugins:[
    // 树摇动
    new uglify(),
    // 设置环境
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('production')
      }  
    }),
    // 设置缓存hash
    new webpack.HashedModuleIdsPlugin(),
    // 清除相同模块
    new webpack.optimize.CommonsChunkPlugin({
      name:'runtime'
    })
  ]
})