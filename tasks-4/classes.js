class Animal{
    constructor(name,spieces){
        this.name=name;
        this.spieces=spieces;
    }
    print(){
        console.log(`animal details: ${this.name}, ${this.spieces}`);
    }
}
const animal=new Animal('leo','lion');
animal.print();