const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const path=require('path')
const webpack=require('webpack')

module.exports={
  // 出口
  output:{
    path:path.resolve(__dirname,'dist'),
  },
  resolve:{
    extensions: ['.js', '.vue', '.json'],
    alias:{
      'vue$':'vue/dist/vue.common.js'
    }
  },
  // 模块
  module:{
    rules:[
      // zepto
      {
        test: require.resolve('zepto'),
        loader: 'exports-loader?window.Zepto!script-loader'
      },
      // vue
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      // scss
      {
        test:/\.scss$/,
        loader:'style!css!scss'
      },
      // css
      {
        test:/\.css$/,
        loader:'style!css'
      },
      // es5 es6
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000
        }
      },
      // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  // 插件
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    new webpack.ProvidePlugin({
      $:'zepto'
    })
  ]
}