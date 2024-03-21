"use strict"


// This is global space
console.log(this);//globalObject - window.global

// This inside a function
function x(){
    // The value depend on strict and non-strict node
    console.log(this)
}
// x()

// this inside non-strict mode - (this substitution )
// this keyword will be replaced with globalObject only in non-strict mode

// this keyword value depends on how the function is called (window)
x();// result will be undefined
window.x();// result will be window


//what is difference between function and a method
//Method --> If a function is used as a part of object that is method. 
const student = {
    name : "Aman gupta",
    printName: function(){
        console.log(this);// value of this keyword is object
    }
}
student.printName()
const student2 = {
    name : "Rahul gupta",
}

//  Call apply bind methods(sharing methods)
student.printName.call(student2)

const obj = {
    a : 10,
    x : ()=>{
        console.log(this);
    }
}
obj.x()

// this inside nested arrow function
const obj2 ={
    b : 20,
    y : function(){
        // enclosing lexical context
        const z = ()=>{
            console.log(this);
        }
        z();
    }
}
obj2.y()

// this inside DOM element => reference to HTMLelement