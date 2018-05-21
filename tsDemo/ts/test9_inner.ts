export namespace Validation{
  export interface StringValidator{
    isAcceptable(s:string):boolean
  }
  
  const numberRegExp=/^[0-9]+$/
  const letterRegExp=/^[A-Za-z]+$/
  
  export class LetterValidator implements StringValidator{
    isAcceptable(s:string){
      return letterRegExp.test(s)
    }
  }
  
  export class numberValidator implements StringValidator{
    isAcceptable(s:string){
      return numberRegExp.test(s)
    }
  }
}