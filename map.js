//Map loop --->


map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('IN', "India")
map.set('FR', "France")

for (const [key, value] of map) {
    // console.log(key +":-"+ value)
    
}
// console.log(map)

const myNum  = [1,2,3,24,43,42,35,45,23,34]

// const newNum = myNum.map( (num)=> num + 25 )
// console.log(newNum);

const newNumber = myNum.map( (num) => num* 10 ).map((num) => num+1).filter((num)=> num > 400)

console.log(newNumber)

const thisNum = [34,45,34,45,34,54,32,45]
const InthisNum = thisNum.map((key) => key+10).map((key)=> key*10).map((num) => num/10)
console.log(InthisNum)

 



