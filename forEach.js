let arr = [2,6,4] 

for (let index=0; index<arr.length; index++){
    const element = index;
    if(element==1){
        // console.log("1 is the best number")
    }
    // console.log(element)
}

for(let i=1; i<5; i++){
    console.log(`outer loop value : ${i}`)
    for(let j=1; j<6; j++){
        // console.log(`Inner loop value: ${j} and inner loop value ${i}`)
        // console.log(i + "*" + j + "=" + i*j)
    }
    // console.log(i)
}

//Break and Continue -->
for(let index =1; index<=10; index++){
    // if(index == 5){
    //     console.log(`Detected ${index}`)
    //     break;
    // }
    if(index == 5){
        // console.log(`Detected ${index}`)
        continue;   }
    // console.log(`Value of index is ${index}`)
}


//ForEach loop --->

arr.forEach(function(index, element, arr){
    // console.log(element, index, arr);
})

arr.forEach( (arr, elements, index) => {
    // console.log("arrow",arr, elements, index);
})

const heros = ['Rahul', 'pankaj', 'aman', 'basanti', 'gabbar','prathiban'];
heros.forEach(function(elements, index, hero){
    // console.log(index,elements.toUpperCase());
 
} )



//Filter --->
const herosWithAn =heros.filter((elements) => {

    return elements.endsWith('an')
})
// console.log(herosWithAn);


//Shopping cart

const cartBill = [23,4,3254,464,34,34,];
const sumOfCartBill = cartBill.reduce((prev,curr) => prev + curr,0)
// console.log(sumOfCartBill);


//Every---> check if the values are numbers 

const gameScore = [30,200,46,34,53,43,304];
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
// console.log("check:", gameScoreCheck);

//find score above 200
const above200 = gameScore.find((score) => score>200)
// console.log(above200);

const SumOfGame = gameScore.reduce((last,next) => last+next);
// console.log(SumOfGame)

gameScore.forEach((elements,index) => {
    // console.log(index,elements);
})

const above30 = gameScore.find((score) => score>30);
// console.log(above30);

//some--->
const even = gameScore.some((element) => element%2 == 0)
