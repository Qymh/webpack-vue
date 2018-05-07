const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

function generate(entryJs){
  let items=[]
  for(let i in entryJs){
    let item=entryJs[i]
    let jsRegExp=/\.js$/
    item=item.replace(jsRegExp,'')
    let url=item
    let nameRegExp=/\w+\//
    item=item.replace(nameRegExp,'')
    items.push({
      name:item,
      url:url
    })
  }
  return items
}

module.exports={
  entryJs:[
    'index2.js',
    'home/index1.js'
  ],
  lib:{
    generateEntryJs(entryJs){
      let entry={}
      let items=generate(entryJs)
      for(let i in items){
        let item=items[i]
        let name=item.name
        let url=item.url
        entry[name]=path.join(__dirname,'../','js',url)
      }
      return entry
    },
    generateHtml(entryJs){
      let html=[]
      let items=generate(entryJs)
      for(let i in items){
        let item=items[i]
        let name=item.name
        let url=`${item.url}.html`
        let inner=new HtmlWebpackPlugin({
          template:path.join(__dirname,'../','html',url),
          filename:`${name}.html`,
          chunks:[name]
        })
        
        html.push(inner)
      }
      return html
    }
  }
}