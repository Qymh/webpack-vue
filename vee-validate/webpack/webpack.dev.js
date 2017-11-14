const webpack=require('webpack')
const merge=require('webpack-merge')
const common=require('./webpack.common')
const path=require('path')

module.exports=merge(common,{
  entry:{
    main:['webpack-hot-middleware/client',path.resolve(__dirname, '../src/index.js')]
  },
  output:{
    // 输出的名字
    filename:'[name].[hash].js',
    publicPath:'/'
  },
  devtool:'#cheap-module-eval-source-map',
  plugins:[
    // 定义环境
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})