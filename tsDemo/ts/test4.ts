let myAdd:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y}

let myAdd2=function(x:number,y:number):number{return x+y}

function myAdd3(x:number,y:number):number{
  return x+y
}

function manyArguments(x:number,...others:string[]):string{
  return x+others.join('')
}

class Test{
  info:string
  clickedAc(){
    return function(){
      console.log(this)
    }
  }
}

let env1=new Test()

let suits=["hearts", "spades", "clubs", "diamonds"]

function pickCard(x):any{
  if(typeof x =='object'){
    let pickedCard=Math.floor(Math.random()*x.length)
    return pickedCard
  }else if(typeof x =='number'){
    let pickedSuit=Math.floor(x/13)
    return {suit:suits[pickedSuit],card:x%13}
  }
}

let myDeck=[{suit:'diamonds',cartd:2},{suit:'spades',card:10},{suit:"hearts",card:4}]

let pickedCard1=myDeck[pickCard(myDeck)]

let pickedCard2=pickCard(15)

function over(x:{length:number}):number

function over(x:string[]):string

function over(x):any{
  if(Object.prototype.toString.call(x)==='[object Object]'){
    return x.length
  }else if(Array.isArray(x)){
    let inner:string=''
    x.forEach((p:string):void=>{
      inner+=p
    })
    return inner
  }
}

console.log(over({length:1}))

