const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const webpack=require('webpack')
const path=require('path')

module.exports={
  entry:{
    app:'./src/index.js',
    vendor:[
      'vue'
    ]
  },
  output:{
    filename:'[name].[chunkhash].js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'test'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'runtime'
    })
  ]
}