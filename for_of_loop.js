//For of loop -->
const array =[1,2,3,4,5];
for (const n of array) {
    // console.log(n)
}
const greeting = "Jai Shree Ram"
for (const greet of greeting) {
    if(greet == " "){
        // console.log(`its a space`)
        continue
    }
    // console.log(`char of greet is ${greet}`)
    
}

const welcome =["aman", "rahul", "pawan", "Gabbar", "basanti"]

for (const wel of welcome) {
    // if(wel === "pawan"){
    //     console.log(`we found ${wel}`)
    //     continue;
    // }
    console.log(wel)
    
}

const yara= "tu mera yaar h "

for (const yar of yara) {
    // if(yar === "r"){
    //     console.log(`i found ${yar}`)
    //     continue;
    // }
    console.log(yar)
}