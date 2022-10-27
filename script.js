// library array 
let myLibrary = [];

// book constructor
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function (){
        return title + " by " + author + ", " + pages + " pages, " + read
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
console.log(theHobbit.info());

// functions

function addBookToLibrary(){
}

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let newBook = new Book(title.value, author.value, pages.value);
    alert(newBook.info());
})

function formChange(){
     let title = document.getElementsByName('title')[0].value;
     let author = document.getElementsByName('author')[0].value;
     let pages = document.getElementsByName('pages')[0].value;
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