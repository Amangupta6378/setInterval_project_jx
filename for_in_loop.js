const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift'

}
//for of loop is not applicable for object iteration so we use for in loop for object iteration

for (const key in myObject) {
    // console.log(myObject[key])
    console.log(`${key} is shortcut for ${myObject[key]}`)
    
    
}


const programming = ["js","RB", "py", "java", "cpp"]

for (const key in programming) {
  console.log(programming[key])
}

const products ={
  sparx : 1500,
  campus : 1899,
  redtape : 2999
}

for (const key in products) {
  console.log(`${key} shoes price is ${products[key]}`)
  
}