const webpack=require('webpack')
const merge=require('webpack-merge')
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin')
const webpackConfig=require('./webpack.config')
const config=require('./config').dev
const env=process.env.NODE_ENV

const devWebpackConfig=merge(webpackConfig,{
  mode:env,
  devtool:config.devtool,

  devServer:{
    publicPath:config.publicPath,
    contentBase:config.contentBase,
    progress:config.progress,
    quiet:config.quiet,
    host:config.host,
    port:config.port,
    clientLogLevel:config.clientLogLevel,
    historyApiFallback:config.historyApiFallback,
    open:config.open,
    inline:config.inline,
    overlay:config.overlay,
    hot:config.hot,
    compress:config.compress
  },

  plugins:[
    // 启用热更新
    new webpack.HotModuleReplacementPlugin(),
    // 编译出错则跳过
    new webpack.NoEmitOnErrorsPlugin(),
    // 友好的错误提醒
    new FriendlyErrorsWebpackPlugin()
  ]
})

module.exports=devWebpackConfig