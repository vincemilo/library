let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.info = function() {
    let readStatus = () => this.read === "false" ? "not read yet" : "read"; 
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus()}`;
};

function addBookToLibrary(book){
    myLibrary.push(book);
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "true");
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 368, "false");

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
    let remove_btn = document.createElement('button');
    remove_btn.textContent = 'Remove';
    remove_btn.dataset.remove = myLibrary.length - 1;
    li.appendChild(readBtn);
    li.appendChild(remove_btn);
    ul.appendChild(li);
    toggle();
    event.preventDefault();
};
button.addEventListener('click', submit, false);

//add functionality to remove button
ul.addEventListener('click', (e) => {
    // check if read button
    if ((Object.keys(e.target.dataset)[0]) === 'read'){
        // console.log(e.target);
        toggleRead(e.target);
    } else {
        // the remove button
        let confirm = window.confirm('Are you sure?');
        if (confirm === true){
        e.target.parentNode.remove();
        myLibrary.splice(e.target.dataset.id, 1);
        }
    }
});

let readBtn = document.createElement('button');
readBtn.textContent = 'Read';
readBtn.dataset.read = 2;

function toggleRead(button){
    button.textContent === 'Read' ? button.textContent = 'Not Yet Read' : button.textContent = 'Read';
    myLibrary[button.dataset.read].read === 'true' ? myLibrary[button.dataset.read].read = 'false' : myLibrary[button.dataset.read].read = 'true';
}