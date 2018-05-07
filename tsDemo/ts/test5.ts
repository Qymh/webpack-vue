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

let mycbindentity=(arg:string):string=>{
  return arg
}

interface ParentIndentify{
  <T>(arg:T):T
}

function dIdentity<T>(arg:T):T{
  return arg
}

let newdidentity:ParentIndentify=dIdentity

class classIdentity<T>{
  value:T
  add:(x:T,y:T)=>T
}

let myTest=new classIdentity<number>()

myTest.value=1

interface LengthLimit{
  length:number
}

function lengthFn<T extends LengthLimit>(arg:T):T{
  console.log(arg.length)
  return arg
}

function create<T>(c:{new (cons:string):T},cons:string):T{
  return new c(cons)
}

class mycreate{
  value:string
  constructor(value:string){
    this.value=value
  }
}

let create1=create(mycreate,'123')
console.log(create1)