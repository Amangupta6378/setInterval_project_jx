//singleton
// Object literals

//object.create(constuctor method)

const mySym = Symbol("key1")


const JsUser = {
    name: "Aman Gupta",
    age: 19,
    [mySym] : "key1",
    location: "Alwar",
    email: "guptaaman6378",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saterday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser["mysym"])
// Object.freeze(JsUser);

JsUser.email = "amanbania8769gupta@gmail.com"
// console.log(JsUser["email"])
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Welcome JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Welcome JS user ${this.name}`)
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// Second Topic => Singleton
//const tinderUser = new Object(){This is a singleton object}
 
const tinderUser = {}

tinderUser.email = "guptaaman6378",
tinderUser.name = "Aman Gupta",
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


const regularUser = {
    email: "guptaaman6378",
    fullname : {
        userfullname:{
            firstname:"Aman",
            lastname: " gupta"
        }
    }
    
};

// console.log(regularUser.fullname.userfullname.firstname);

const course={
    courseInstructor :" Hitesh Sir",
    topic : "Javascript",
    Date : "28/01/24"
}

console.log(course.courseInstructor)


const{courseInstructor : ins} = course;
console.log(ins)

//json => json is actually an object without its name for Example
// {
//     "name" : "Aman Gupta",
//     "class" : "Cse",
//     "age" : "21"
// }

//json of array ->
[
    {
        "name" : "Aman Gupta",
        "class" : "Cse",
        "age" : "21"   
    },
    
    {
        "name" : "Aman Gupta",
        "class" : "Cse",
        "age" : "21"   
    },

    {
        "name" : "Aman Gupta",
        "class" : "Cse",
        "age" : "21"   
    }   
]