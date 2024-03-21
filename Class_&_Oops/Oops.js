// Object lateral
const user = {
  username: "Aman gupta",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    console.log(this.username);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor-->
// const PromiseOne = new Promise();// What is new keyword
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}
// console.log(User);

// As we use the new keyword firstly an empty object creates that is called instance
// step 1 : Object creation.
// step 2 : Constructor function is called through new keyword.
// step 3 : This keyword inject in this.
// step 4 : Value returns.


const UserTwo = new User("Aman gupta", 23, true);
const UserThree =new  User("Rahul gupta", 12, false);

// console.log(UserTwo.constructor)
console.log(UserThree instanceof User)