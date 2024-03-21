const name ={
    firstName : "Aman",
    lastName : "Gupta",
    printFullName : function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
// name.printFullName()
let printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " "+ "from" +" "  +hometown +" "+ state);
}
printFullName.call(name,"Bhagalpur", "Bihar")

const name2 ={
    firstName : "Sachin",
    lastName : "Tendulkar"
}

// function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra")

// Apply ----> In apply method only difference is square bracket
printFullName.apply(name2, ["Mumbai","Maharashtra"])
