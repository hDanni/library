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

const addBookBtn = document.querySelector('.add-book');

addBookBtn.addEventListener('click', () => {

});