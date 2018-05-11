function extend<T,U>(first:T,second:U):T & U{
  let result=<T & U>{}
  for(let id in first){
    (<any>result)[id]=(<any>first)[id]
  }
  for(let id in second){
    if(!result.hasOwnProperty(id)){
      (<any>result)[id]=(<any>second)[id]
    }
  }
  return result
}

class Person{
  constructor(public name:string){}
}

interface Loggable{
  log():void
}

class ConsoleLogger implements Loggable{
  log(){
    console.log(1)
  }
}

var jim=extend(new Person('Jim'),new ConsoleLogger())

function padLeft(value:string,age:number|string){
  console.log(age)
}

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

// function getSmallPet(): Fish | Bird {
//   return pet
// }

// let pet = getSmallPet()
// pet.layEggs()

interface instanceInter{
  getInstance():string
}

interface childInstance extends instanceInter{
  parentFn():void
}

let childEntry:childInstance

childEntry={
  parentFn:()=>{

  },
  getInstance:()=>{
    return '123'
  }
}


class orignInstance implements instanceInter{
  constructor(private name:string){}
  getInstance(){
    return this.name
  }
}

class computedInstance implements instanceInter{
  constructor(private arr:string[]){}
  getInstance(){
    return this.arr.join('')
  }
}

function getInstance(){
  return Math.random()<0.5?
    new orignInstance('123'):
    new computedInstance(['a,b,c'])
}

let resultInstance=getInstance().getInstance()

function broken(name:string|null):string{
  function postFix(epithet:string){
    return name!.charAt(0)+epithet
  }
  name=name||'Bob'
  return postFix(name)
}


