
Object.defineProperty(Array.prototype,'test',{
  value:123
})

let pets=[1,2,3]

for(let i in pets){
  console.log(i)
} 