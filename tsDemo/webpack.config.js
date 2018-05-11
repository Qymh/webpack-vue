const webpack=require('webpack')
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  entry:{
    test:'./ts/export5/export1.ts'
  },
  devServer:{
    publicPath:'/',
    contentBase:'/',
    progress:true,
    open:false
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
  resolve:{
    extensions: [".ts", ".js"],
    alias:{
      'ts':path.resolve(__dirname,'ts')
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'html/index1.html'
    })
  ]
}