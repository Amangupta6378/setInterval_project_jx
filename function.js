function addTwoNumbers(num1,num2)  {
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}

const result = addTwoNumbers(23,45);

// console.log(result) 

function loginUserMassage(username = "user"){
    if(username === undefined){
        console.log("Please check the username")
    }
    return `${username} just loggedIn`
}

console.log(loginUserMassage("Aman Gupta"));
