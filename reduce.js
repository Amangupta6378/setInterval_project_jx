const myNum = [1,2,3,4]

// const myTotal = myNum.reduce(function (acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`)
//     return acc + curval(Current value)
// },0 )


const myTotal = myNum.reduce( (acc, curval) => acc + curval,0)
// console.log(`acc : ${acc} and curval : ${curval}`)

// console.log(myTotal)

const ShoppingCart = [
    {
        itemName : "js course",
        price : 1900
    },
    {
        itemName : "python course",
        price : 1999
    },
    {
        itemName : "flutter course",
        price : 2900
    },
    {
        itemName : "java course",
        price : 1200
    },
]

// const priceToPay =ShoppingCart.reduce((acc, item) => acc + item.price,0)
const priceToPay = ShoppingCart.reduce((acc, curval) =>acc + curval.price,100 ) 

console.log(priceToPay)