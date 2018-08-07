const webpack=require('webpack')
const {VueLoaderPlugin}=require('vue-loader')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin')
const isProd=process.env.NODE_ENV==='production'
const config=require('./config')
const prod=config.prod
const dev=config.dev
const resolve=config.lib.resolve

const baseConfig={
  mode:isProd?'production':'development',
  devtool:isProd?prod.devtool:dev.devtool,
  output:{
    path:resolve('dist'),
    publicPath:dev.publicPath,
    filename:'[name].[chunkhash].js'
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
        use:isProd?
        ['thread-loader','babel-loader']:['babel-loader'],
        exclude:/node_modules/,
        include:/src/
      },
      // css
      {
        test:/\.css$/,
        use:[
          isProd?
          MiniCssExtractPlugin.loader:'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      // scss
      {
        test:/\.scss$/,
        use:[
          isProd?
          MiniCssExtractPlugin.loader:'vue-style-loader',
          'css-loader',
          'postcss-loader',
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
  plugins:[
    new VueLoaderPlugin(),
    // new FriendlyErrorsWebpackPlugin()
  ],
  // stats:{
  //   colors: true,
  //   modules: false,
  //   children: false,
  //   chunks: false,
  //   chunkModules: false
  // }
}

module.exports=baseConfig