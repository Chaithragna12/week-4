let book={
    title:"title leni book",
    author:"Chaithragna",
    pages:100,
    summary: function(){
        console.log(`${this.title} is written by ${this.author} with ${this.pages} pages`);
    }
}
book.summary();
