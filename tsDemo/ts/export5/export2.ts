export class Calculator{
  private current=0
  private memory=0
  private operator:string

  protected processDight(digit:string,currentValue:number){
    if(digit>='0'&&digit<='9'){
      return currentValue*10+(digit.charCodeAt(0)-'0'.charCodeAt(0))
    }
  }

  protected processOperator(operator:string){
    if(['+','-','*','/'].indexOf(operator)>-1){
      return operator
    }
  }

  protected evaluateOperator(operator:string,left:number,right:number):number{
    switch(this.operator){
      case '+':return left+right
      case '-':return left-right
      case '*':return left*right
      case '/':return left/right
    }
  }

  private evaluate(){
    if(this.operator){
      this.memory=this.evaluateOperator(this.operator,this.memory,this.current)
    }else{
      this.memory=this.current
    }
    this.current=0
  }

  public handelChar(char:string){
    if(char==='='){
      this.evaluate()
      return
    }else{
      let value=this.processDight(char,this.current)
      if(value!==undefined){
        this.current=value
        return
      }else{
        let value=this.processOperator(char)
        if(value!==undefined){
          this.operator=value
          this.evaluate()
          return
        }
      }
      throw new Error(`Unsupported input: '${char}'`);
    }
  }

  public getResult(){
    return this.memory
  }
}

export function test(c:Calculator,input:string){
  console.log()
  for(let i=0;i<input.length;i++){
    c.handelChar(input[i])
  }
  console.log(`result of ${input}${c.getResult()}`)
}