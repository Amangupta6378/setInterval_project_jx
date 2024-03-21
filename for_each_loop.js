const coding = ["js","RB", "py", "java", "cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })


//By arrow function
coding.forEach( (item) =>{
    // console.log(item);
} )

function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)


coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName : 'javascript',
        languageFile : 'js'
    },
    {
        languageName : 'java',
        languageFile : 'java'
    },
    {
        languageName : 'python',
        languageFile : 'py'
    }
]

myCoding.forEach( (item, index)=>{
    console.log(item.languageName, item.languageFile);
})


const products = ["Aman", "rahul", "pawan", "Gabbar", "basanti"];

products.forEach( (item) =>{
    console.log(item)
} )


const items =[
    {
        Name :"Red Tape",
        Price : 19000,
        reviews : 5

    },
    {
        Name :"Campus",
        Price : 1200,
        reviews : 4

    },
    {
        Name :"Gucci",
        Price : 25000,
        reviews : 5

    },
    {
        Name :"Sparx",
        Price : 1500,
        reviews : 4.5

    }
];

items.forEach( (shoes) => 
{console.log(shoes.Name, shoes.Price)})

