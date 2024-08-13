function car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}
car.prototype.printdetails=function(){
    console.log(`Car details: ${this.make} ${this.model} ${this.year}`);
}
let mycar=new car('Mahindra','Scorpio N',2024);
mycar.printdetails();

