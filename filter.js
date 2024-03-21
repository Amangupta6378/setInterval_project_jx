const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) =>{
//     // console.log(item)
//     return item
// })

// console.log(values)
//Note --> forEach loop does not return any value it can console only. For its alternative we use "Filter",


const myNum = [1,2,3,4,5,6,7,8,9,10]


const newNum = myNum.filter( (num)=> {
     return  num>4
} )

// console.log(myNum);
// console.log(newNum)

const newNums = []

myNum.forEach( (num)=>{
     if(num > 4){
         newNum.push(num)
     }
} )

console.log(newNum)

const book = [
     {title :"Book first", genre : "history", publish: 2003, edition : 1993},
     {title :"Book second", genre : "Non-fiction", publish: 2016, edition : 2008},
     {title :"Book third", genre : "fiction", publish: 1996, edition : 2004},
     {title :"Book fourth", genre : "Science", publish: 2004, edition : 2014},
     {title :"Book fifth", genre : "fiction", publish: 1997, edition : 2017},
     {title :"Book sixth", genre : "history", publish: 2003, edition : 2015},
     {title :"Book seventh", genre : "Science", publish: 2003, edition : 1993},
     {title :"Book eighth", genre : "history", publish: 2003, edition : 2018},
     {title :"Book ninth", genre : "Non-fiction", publish: 2006, edition : 2015}
]

// const myBook = book.filter( (bk) => bk.genre === "Non-fiction" && bk.edition >= 2000 )

const myBook = book.filter((bk) => bk.edition >2000 && bk.genre === "fiction")

// myBook = book.filter( (bk) => bk.edition >= 2000 )

console.log(myBook)