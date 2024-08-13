const ps=require("prompt-sync");
const prompt=ps();
function check(num){
    if(num>0){
        console.log("it is positive");
    }
    else if(num<0){
        console.log("it is negative");
    }
    else{
        console.log("it is zero");
    }
}
let number=prompt("enter a number");
check(number);
