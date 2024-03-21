// let myName = "Aman     "

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

heroPower.getSpiderPower()
console.log(heroPower.thor);

Object.prototype.aman = function(){
    console.log("Aman is present in all object");
}
aman()
