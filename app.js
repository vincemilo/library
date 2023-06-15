let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.info = function() {
    let readStatus = () => this.read === false ? "not read yet" : "read"; 
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus()}`;
};

function addBookToLibrary(book){
    myLibrary.push(book);
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info())

addBookToLibrary(theHobbit);

// console.table(myLibrary);

const library = document.querySelector('.library');
const ul = document.createElement('ul');
let books = myLibrary.map(book => book.info());
library.textContent = books;