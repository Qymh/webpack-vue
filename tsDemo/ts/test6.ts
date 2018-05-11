enum myResponse{
  No=0,
  Yes
}

function respond(value:string,message:myResponse):void{

}

enum E{
  foo,
  test
}

enum EE{
  X,Y,Z
}

function eTest<T>(obj:{X:T}):T{
  return obj.X
}

const enum cEnum{
  A=1,
  B=A*2
}

declare enum dEnum{
  A=1,B,C
}

enum EventType{Mouse,Keyboard}

interface Event{timestamp:number}
interface MouseEvent extends Event{
  mouseX:number
  mouseY:number
}
interface KeyEvent extends Event{
  keyCode:number
}

function listenEvent(eventType:EventType,handler:(n:Event)=>void){
  handler.apply(void 0,{timestamp:'123'})
}

listenEvent(EventType.Mouse,(e:MouseEvent)=>{
})

function invokeLater(arg:any[],callback:(...args:any[])=>void){
  callback.apply(void 0,[1,3])
}

invokeLater([1,2],(x?,y?)=>{
})


class Animal{
  feet:number
  constructor(name:string){

  }
}

class Size{
  feet:number
  constructor(name:string){

  }
}

let myAnimal:Animal
let mySize:Size

myAnimal=mySize
