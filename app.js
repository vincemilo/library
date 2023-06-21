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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 500, false);

addBookToLibrary(theHobbit);
addBookToLibrary(bloodMeridian);

// console.table(myLibrary);

const library = document.querySelector('.library');
const ul = document.querySelector('.ul');
let books = myLibrary.map(book => book.info());
// console.log(books);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(book));
    ul.appendChild(li);
}

const bookForm = document.querySelector('.book-form');
const toggle = () => (bookForm.style.display === 'none' ? bookForm.style.display = 'block' : bookForm.style.display = 'none');
const newBook = document.querySelector('.new-book');
newBook.addEventListener('click', toggle)