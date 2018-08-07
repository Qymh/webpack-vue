const webpack=require('webpack')
const merge=require('webpack-merge')
const base=require('./webpack.config')
const resolve=require('./config').lib.resolve
const VueSSRClientPlugin=require('vue-server-renderer/client-plugin')
const isProd=process.env.NODE_ENV==='production'

const config=merge(base,{
  entry:{
    app:resolve('src/entry-client.js')
  },
  optimization:{
    // 压缩
    minimizer:isProd?[
      // 树摇动
      new UglifyjsWebpackPlugin({
        cache:config.cache,
        parallel:config.parallel
      }),
      // 压缩提取出来的css
      new OptimizeCSSAssetsPlugin({})
    ]:[],
    // 代码分离
    splitChunks:{
      cacheGroups:{
        // 公用
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
        },
        // 
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    // 缓存
    runtimeChunk:{name:'runtime'}
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV||'development'),
      'process.env.VUE_ENV':'"client"'
    }),
    new VueSSRClientPlugin()
  ]
})

module.exports=config