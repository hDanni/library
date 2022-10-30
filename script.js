// book constructor
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function (){
        return title + " by " + author + ", " + pages + " pages, " + read
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
// console.log(theHobbit.info());

const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 342, 'not read yet')

// library array 
let myLibrary = [theHobbit, theTwoTowers];

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', grabFormData);

function grabFormData(event){
    event.preventDefault();

    let newBook = new Book(title.value, author.value, pages.value);
    alert(newBook.info());
    addBookToLibrary(newBook);
    displayArray();
}
const cardContainer = document.querySelector('.book-container');

function addCard(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-card');
    cardContainer.appendChild(newDiv);

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('book-author');

    const bookPages = document.createElement('div');
    bookPages.classList.add('book-pages');

    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    readBtn.classList.add('card-btn');
    readBtn.textContent = 'Read'
    removeBtn.classList.add('card-btn');
    removeBtn.textContent = 'Remove '

    newDiv.appendChild(bookTitle);
    newDiv.appendChild(bookAuthor);
    newDiv.appendChild(bookPages);
    newDiv.appendChild(readBtn);
    newDiv.appendChild(removeBtn);
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

function displayArray(){
    for (const books of myLibrary){
        console.log(books);
    }
}

function formChange(){
     let title = document.getElementsByName('title')[0].value;
     let author = document.getElementsByName('author')[0].value;
     let pages = document.getElementsByName('pages')[0].value;
     if(document.getElementById('read-btn').checked){
        let read = true;
     } else {
        let read = false;
     }
}

// +add book btn to open modal
const addBookBtn = document.querySelector('.add-book-btn');
const overlay = document.getElementById('overlay');

addBookBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    openModal(modal);
})

overlay.addEventListener('click', () => {
    const modals = document.querySelector('.modal.active')
    closeModal(modals);
})

function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}
function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}