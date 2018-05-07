const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const path=require('path')
const config=require('./config')
const entryJs=config.entryJs
const generateEntryJs=config.lib.generateEntryJs
const generateHtml=config.lib.generateHtml

let entry={}
let html=[]

entry=generateEntryJs(entryJs)
html=generateHtml(entryJs)

module.exports={
  entry:entry,
  mode:'development',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  plugins:[
    ...html,
    new CleanWebpackPlugin('dist')
  ]
}