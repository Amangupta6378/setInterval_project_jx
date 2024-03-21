// const P = new Promise(function(resolve, reject){
//    setTimeout(function(){
//     resolve("Promise resolved value!!")
//    }, 5000)
// });
// const P2 = new Promise(function(resolve, reject){
//    setTimeout(function(){
//     resolve("Promise resolved value!! for second time")
//    }, 10000)
// });




//async function always returns a promise

// async function getData(){
//     return P;
//     //(If you return the promise then it will return you promise and if you don't return any promise then also it will return that value after rapping in the promise)
// }
// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));


//Note ---> async and await combo is used to handle promises

//-->  How did we handle promises before async await
// function getData(){
// //js engine will not wait for promise to be resolved
// P.then((res)=> console.log(res));
// console.log("Namaste Javascript")
// }

// getData()

//---> How do we using promise using async await

// async function handlePromise(){
//     console.log("hello world");
//     //In Async Await js engine was waiting for promise to resolved 
//     const val = await P;
//     console.log(val)
//     console.log("Namaste Javascript")

//     const val2 = await P2;
//     console.log("Namaste Javascript 2")
//     console.log(val2 + "2")
// }

// handlePromise();

// Note -->  Async is a keyword that can only be used inside an async function


const api = "https://api.github.om/users/akshaymarch7";
async function handlePromise(){
   const data = await fetch(api);
   //Note of fetch ---> fetch gives response.
   // Then we change this response in json form by Response.json() 
   
   //and then it returns jsonValue.
   
     //fetch() => Response.json() => jsonValue

     try {
        const jsonValue = await data.json()
        console.log(jsonValue)
     } catch (error) {
        console.log(error)
        
     }
}

handlePromise()