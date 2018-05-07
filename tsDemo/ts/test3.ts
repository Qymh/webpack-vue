class test1{
  greeting:string
  constructor(message:string){
    this.greeting=message
  }
  greet(){
    return `hello${this.greeting}`
  }
}

let test11=new test1('asdf')

class test2{
  move(num:number=0){
    console.log(num)
  }
}

class test3 extends test2{
  todo(){
    console.log('todo')
  }
}

let test33=new test3()

class test4{
  name:string
  constructor(theName:string){
    this.name=theName
  }
  move(distance:number){
    console.log(distance)
  }
}

class test5 extends test4{
  constructor(name:string){super(name)}
  move(distance){
    console.log(distance)
  }
}

let test55=new test5('test55')

class test6{
  protected name:string
  constructor(name:string){this.name=name}
}

class test7 extends test6{
  protected age:number
  constructor(name:string,age:number){
    super(name)
    this.age=age
  }
  todo(){
    console.log(this.name)
  }
}

let test77=new test7('asdf',18)

class test8{
  readonly name:string
  constructor(name:string){this.name=name}
}

let test88=new test8('sadf')

class test9{
  constructor(private name:string){
  }
  todo(){
    console.log(this.name)
  }
}

let test99=new test9('sadf')

class test10{
  private _name:string

  get name():string{
    return this._name
  }

  set name(newName:string){
    this._name=newName
  }
}

let test100=new test10()
test100.name='123'

class Grid{
  static base={
    x:0,
    y:0
  }
  constructor(public percent:number){}
  computedDistance(point:{x:number,y:number}):number{
    let xDis=(point.x-Grid.base.x)
    let yDis=(point.y-Grid.base.y)
    return (yDis+xDis)/this.percent
  }
}

let grid1=new Grid(1)
let grid2=new Grid(2)

abstract class Department{
  constructor(public name:string){}

  printName():void{
    console.log('Department'+this.name)
  }

  abstract printMeeting():void
}

class AccountingDepartment extends Department {

  constructor() {
      super('1asdf')
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.'+this.name);
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}

let test:Department
test=new AccountingDepartment()

class Greeter{
  private innerHtml='123'
  static innerText='hello'
  constructor(public greeting?:string){}
  greet():string{
    if(this.greeting){
      return 'outerGreeter'+this.greeting
    }else{
      return this.innerHtml
    }
  }
}

let greeter1:Greeter
greeter1=new Greeter()

