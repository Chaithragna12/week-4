// var is a function scope
function varExample(){
    if(true){
        var a=10;
        console.log("Inside block the value of a is",a);
    }
    a=7;
    console.log("outside block the value of a is",a); // in var we can modify the value or re-assign
}
varExample();
function varExample(){
    if(true){
        var a=10;
        console.log("Inside block the value of a is",a);
    } 
}
varExample();
console.log("outside block the value of a is",a); // ReferenceError: a is not defined

// let is block scope
function letExample(){
     if(true){
        let a=10;
        console.log("Inside block the value of a is",a);
     }
    a=7;
    console.log("outside block the value of a is",a); //   we can re-assign
}
letExample();


function letExample(){
        let a=10;
        console.log("Inside block the value of a is",a);
        a=7;
    console.log("outside block the value of a is",a); //we can re-assign
}
letExample();


// const is block scope
function constExample(){
     if(true){
        const PI=3.14;
        console.log("The value of PI is", PI);
     }
    console.log("The value of PI is", PI); // ReferenceError: PI is not defined
}
constExample();


function constExample(){
        const PI=3.14;
        console.log("The value of PI is", PI);
        PI=3;
        console.log("The value of PI is", PI); // can't re-assign
}
constExample();