// book constructor
function Book(title, author, pages, id, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.id = id
  this.status = Boolean(status)
}

// read & unread prototypes //
Book.prototype.read = function() {
  this.status = true;
}
Book.prototype.unread = function() {
  this.status = false;
}
// library array 
let myLibrary = [];

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', grabFormData);

function grabFormData(event) {
  let newBook = new Book(title.value, author.value, pages.value, status);

  let read = document.getElementById('read-btn');
  if (read.checked) {
    console.log('checked');
    status = newBook.read();
  } else {
    console.log('not checked');
    status = newBook.unread();
  }

  console.log(myLibrary);
  addBookToLibrary(newBook);
  // cardContainer.innerHTML = "";
  // displayArray();
  displayBooks();
  event.preventDefault();
}
const cardContainer = document.querySelector('.book-container');

// renders cards & adds data-index to each card
function addCard(title, author, pages, id, status) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('book-card');
  // newDiv.setAttribute('data-index', id)
  newDiv.dataset.index = id;
  cardContainer.appendChild(newDiv);

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  bookTitle.textContent = title;

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  bookAuthor.textContent = author;

  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  bookPages.textContent = pages + " pages";

  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');
  let currentStatus = myLibrary[id].status;
  readBtn.classList.add('card-btn');
  readBtn.textContent = 'Read';
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';

  // initial check whether item is read or unread //
  if (currentStatus) {
    readActive();
  } else {
    readInactive();
  }
  // read button logic //
  readBtn.addEventListener('click', () => {
    if (currentStatus) {
      readActive();
      myLibrary[id].read();
      console.log(myLibrary[id])
    } else {
      readInactive();
      myLibrary[id].unread();
      console.log(myLibrary[id])
    }
  });

  // update read status //
  function readActive() {
    readBtn.classList.remove('inactive');
    readBtn.classList.add('active');
    readBtn.textContent = 'Read';
    currentStatus = !currentStatus;
  }
  function readInactive() {
    readBtn.classList.remove('active');
    readBtn.classList.add('inactive');
    readBtn.textContent = 'Un-read';
    currentStatus = !currentStatus;
  }


  // remove button logic //
  removeBtn.addEventListener('click', (e) => {
    let index = newDiv.getAttribute('data-index');
    console.log(index);
    myLibrary.splice(index, 1);
    displayBooks();
    console.log(index);

    newDiv.remove();
    console.log(myLibrary);
  })

  newDiv.appendChild(bookTitle);
  newDiv.appendChild(bookAuthor);
  newDiv.appendChild(bookPages);
  newDiv.appendChild(readBtn);
  newDiv.appendChild(removeBtn);
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// function displayArray() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     let currentBook = myLibrary[i];
//     addCard(currentBook.title, currentBook.author, currentBook.pages, i);
//   }
// }

// updates the index, clears current cards
// then re-adds each book and updates index again

function displayBooks() {
  updateBookIndex();
  cardContainer.innerHTML = '';
  myLibrary.forEach(book => {
    addCard(book.title, book.author, book.pages, book.id, book.status)
  });
  updateBookIndex();
}

// updates index of myLibrary array

function updateBookIndex() {
  let i = 0;
  myLibrary.forEach(book => {
    book.id = i;
    i += 1;
  })
}
// grabs form data
// function formChange() {
//   let title = document.getElementsByName('title')[0].value;
//   let author = document.getElementsByName('author')[0].value;
//   let pages = document.getElementsByName('pages')[0].value;
// }

// function readStatus() {
//   let read = document.getElementById('read-btn');
//   let status;
//   if (read.checked) {
//     console.log('checked');
//     status = true;
//     return status;
//   } else {
//     console.log('not checked');
//     status = false;
//     return status;
//   }
// }

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

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}