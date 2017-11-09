const webpack=require('webpack')
const merge=require('webpack-merge')
const common=require('./webpack.common')

module.exports=merge(common,{
  devtool:'inline-source-map',
  output:{
    publicPath:'/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
})