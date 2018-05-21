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
    app:resolve('src/app.ts')
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
      // ts
      {
        test:/\.tsx?$/,
        use:[
          'babel-loader',
          {
            loader:'ts-loader',
            options:{appendTsSuffixTo:[/\.vue$/]}
          }
        ],
        exclude:/node_modules/
      },
      // js
      {
        test:/\.js$/,
        use:isDev?
        ['babel-loader']:['thread-loader','babel-loader'],
        exclude:/node_modules/,
        include:/src/
      },
      // css
      {
        test:/\.css$/,
        use:[
          isDev?
          'vue-style-loader':MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      // scss
      {
        test:/\.scss$/,
        use:[
          isDev?
          'vue-style-loader':MiniCssExtractPlugin.loader,
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
  resolve:{
    // 自动补全扩展
    extensions:['.js','.vue','.ts','.tsx'],
    // 别名
    alias:{
      // src
      '@':resolve('src'),
      // vue
      vue$:'vue/dist/vue.esm.js'
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
