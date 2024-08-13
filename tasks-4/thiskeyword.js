let birth={
    place:"MPL",
    year:2005,
    month:"november",
    bio:function(){
        return `chaithra born in ${this.month}, in the year of ${this.year} at ${this.place}`;
    }
}
console.log(birth.bio());
