function identity<T>(arg:T):T{
  return arg
}

identity('123')

function loggingIndentity<T>(arg:T[]):T[]{
  console.log(arg.length)
  return arg
}

function bloggingIndentity<T>(arg:Array<T>):Array<T>{
  return arg
}

function bindentity<T>(arg:T):T{
  return arg
}

let mybindentity:<T>(arg:T)=>T=bindentity
