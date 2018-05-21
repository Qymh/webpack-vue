
import {Validation} from 'ts/test9_inner'

let strings=['123','abcdef','123asd']

let validators:{[s:string]:Validation.StringValidator}={}

validators['letterOnly']=new Validation.LetterValidator()
validators['numberOnly']=new Validation.numberValidator()

for(let s of strings){
  for(let name in validators){
    let isMatched=validators[name].isAcceptable(s)
    if(isMatched){
      console.log(`${s} is matched ${name}`)
    }
  }
}