const webpack=require('webpack')
const path=require('path')
const {VueLoaderPlugin}=require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const config=require('./config')
const resolve=config.lib.resolve
const isDev=process.env.NODE_ENV==='development'

module.exports={
  entry:{
    app:resolve('src/app.js')
  },
  output:{
    path:resolve('dist'),
    publicPath:'/',
    filename:isDev?'[name].js':'[name].[chunkhash].js'
  },
  module:{
    rules:[
      // vue
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      // pug
      {
        test:/\.pug$/,
        loader:'pug-plain-loader'
      },
      // js
      {
        test:/\.js$/,
        use:isDev?
        ['babel-loader']:['thread-loader','babel-loader'],
        exclude:/node_modules/
      },
      // css
      {
        test:/\.css$/,
        use:[
          isDev?
          'vue-style-loader':MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // scss
      {
        test:/\.scss$/,
        use:[
          isDev?
          'vue-style-loader':MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // 图片
      {
        test:/\.(ico|png|jpe?g|gif|svg)$/,
        loader:'url-loader',
        options:{
          limit:8192,
          name:'images/[name]_[hash:7].[ext]'
        }
      },
      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader:'url-loader',
        options:{
          limit:8192,
          name:'fonts/[name]_[hash:7].[ext]'
        }
      },
      // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader:'url-loader',
        options:{
          limit:8192,
          name:'media/[name]_[hash:7].[ext]'
        }
      }
    ]
  },
  resolve:{
    // 自动补全扩展
    extensions:['.js','.vue'],
    // 别名
    alias:{
      // 样式
      style:resolve('src/assets/style'),
      // 图片
      images:resolve('src/assets/images'),
      // 字体
      fonts:resolve('src/assets/fonts'),
      // js模版
      lib:resolve('src/assets/lib'),
      // js事件
      actions:resolve('src/assets/actions'),
      // 组件
      components:resolve('src/components'),
      // 页面
      pages:resolve('src/pages'),
      // vuex
      store:resolve('src/store')
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:resolve('index.html')
    }),
    new VueLoaderPlugin()
  ],
  stats:{
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}