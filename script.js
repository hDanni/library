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

// modal pop-up functionality
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