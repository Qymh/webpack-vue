const webpack=require('webpack')
const merge=require('webpack-merge')
const path=require('path')
const common=require('./webpack.common')
const uglify=require('uglifyjs-webpack-plugin')
const extractTextPlugin=require('extract-text-webpack-plugin')
const optimizeCSSPlugin=require('optimize-css-assets-webpack-plugin')
const compressionPlugin=require('compression-webpack-plugin')
const copyWebpackPlugin=require('copy-webpack-plugin')

module.exports=merge(common,{
  entry:{
    main:'./src/index.js'
  },
  output:{
    filename:'js/[name].[chunkhash].js',
  },
  // 生产环境下
  devtool:'#source-map',
  plugins:[
    // 清除相同模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // 树摇动
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),
    new extractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    // 保证css在打包后不改变
    new optimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to:'static',
        ignore: ['.*']
      }
    ]),
    // 设置环境
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('production')
      }  
    }),
    // 设置缓存hash
    new webpack.HashedModuleIdsPlugin()
  ]
})