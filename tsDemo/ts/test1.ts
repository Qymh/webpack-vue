let a:boolean=true
let b:number=6
let c:string='123'
let d:number[]=[1,2,3]
let e:[string,number]
e=['1',2]
enum Color{Red,Green=2,Blue}
let f:Color=Color.Green
enum Color2{Red,Green,Blue}
let g:string=Color2[1]
let h:any[]=[1,2,3,false]
function i():void{
  console.log(1)
}

interface testObj{
  name:String,
  age:Number
}

let j={name:'zhang',age:18}
