import validate from 'ts/export1/export2'

let strings=['qwe','12345']

strings.forEach(p=>{
  console.log(`${validate(p)?`match${p}`:'not match'}`)
})
