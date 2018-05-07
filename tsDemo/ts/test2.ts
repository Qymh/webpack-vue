interface PersonConfig{
  name?:string
  age?:number
}

function createPerson(config:PersonConfig):{name:string,age:number}{
  let newPerson={name:'zhang',age:18}
  newPerson.name=config.name
  return newPerson
}

interface Point{
  readonly x:number
  readonly y:number
}

let q:Point={x:1,y:2}

interface searchFunc{
  (source:string,subString:string):boolean
}

let mySearch:searchFunc

let mySearchh=function(source:string,subString:string):boolean{
  let result=source.search(subString)
  return result>-1
}

interface StringArr{
  [index:number]:string
}
let myArr:StringArr
myArr=['bob','fred']

interface ReadonlyArr{
  readonly [index:number]:string
}

let testArr:ReadonlyArr=['a','b']

interface Parents{
  name:string
}

interface Child extends Parents{
  age:number
}

let newInter=<Child>{}

newInter.name='zhang'
newInter.age=18

interface Counter{
  (start:number):string
  interval:number
  reset():void
}

function getCounter():Counter{
  let counter=<Counter>function(start:number){}
  counter.interval=123
  counter.reset=function(){}
  return counter
}

let newC=getCounter()
console.log(newC)
