const path=require('path')

const dev={
  devtool:'#cheap-module-source-map',

  // webpack-dev-middleware
  publicPath:'/dist/',
  logLevel:'warn',
  logger:'warn'
}

const prod={
  devtool:false
}

const ssr={
  returInNewContext:false
}

const lib={
  resolve:(file)=>{
    return path.resolve(__dirname,'../../',file)
  },
  readFile:(fs,file)=>{
    try{
      return fs.readFileSync(path.join(lib.resolve('dist'), file), 'utf-8')
    }catch(e){}
  }
}

module.exports={
  dev,
  prod,
  ssr,
  lib
}