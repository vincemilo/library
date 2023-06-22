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
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 368, false);

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
newBook.addEventListener('click', toggle, false);
const button = document.querySelector('.button');
const submit = function(event){
    const data = new FormData(bookForm);
    const book = new Book;
    for (const entry of data) {
      book[entry[0]] = entry[1];
    }
    addBookToLibrary(book);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(book.info()));
    ul.appendChild(li);
    toggle();
    event.preventDefault();
};
button.addEventListener('click', submit, false);