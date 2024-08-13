function week(day){
    switch(day){
        case 'sunday':
            console.log("it's sunday");
            break;
        case 'monday':
            console.log("it's monday");
            break;
        case 'tuesday':
            console.log("it's tuesday");
            break;
        case 'wednesday':
            console.log("it's wednesday");
            break;
        case 'thursday':
            console.log("it's thursday");
            break;
        case 'friday':
            console.log("it's friday");
            break;
        case 'saturday':
            console.log("it's saturday");
            break; 
        default: console.log("enter valid day");
    }
}

const ps=require("prompt-sync");
const prompt=ps();

let day=prompt("enter a day of week");
week(day);