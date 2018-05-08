const webpack=require('webpack')
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  entry:{
    test:'./ts/test6.ts'
  },
  mode:'development',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        loader:'ts-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'html/index1.html'
    })
  ]
}