const promiseOne = new Promise(function(resolve, reject)  {
    //Do an async task
    //DB calls, cryptography, network.
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 5000)
})

promiseOne.then(function(){
    // console.log(("Promise Consumed"));
})


// Other method of promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log(
        //     "Async task is again completed"
        //     )
            resolve()
    },1000)
}).then(function(){
    // console.log("PromiseTwo completed")
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username : "Aman gupta", email : "amanbania8769gupta@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    // console.log(user);
})

const PromiseFour = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username : "Sourav Singh", email: "singhSaurav123@gmail.com"})
        }
        else{
            reject("ERROR :ESomething went wrong")
        }
    },1000)
})

PromiseFour.then((user)=>{
    // console.log(user);
    return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolve or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username : "javascript", email: "singhSaurav123@gmail.com"})
        }
        else{
            reject("ERROR :Js went wrong")
        }
    },5000)
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response)
   } catch (error) {
    console.log(error)
    
   }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/usershiteshchoudhry')
.then((response) =>{
    return response.json
})
// .then((data)=>{
//     return data.json()
// })
// .catch((error)=> console.log(error))


const PromiseTen = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Here is promiseTen");
        resolve()
    }, 2000)
})