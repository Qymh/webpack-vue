declare function require(name:string):any

import validate from 'ts/export3/export2'

let test:typeof validate=require('ts/export3/export2')

let a=new validate()

// console.log(typeof validate)