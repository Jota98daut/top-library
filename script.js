const BookStatus = {
  notStarted: "not started",
  reading: "reading",
  finished: "finished",
};

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = BookStatus.notStarted;
  }
}

let myLibrary = [
  new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 300),
  new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling", 300),
  new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", 300),
  new Book("Harry Potter and the Goblet of Fire", "J. K. Rowling", 300),
  new Book("Harry Potter and the Order of the Phoenix", "J. K. Rowling", 300),
  new Book("Harry Potter and the Half-Blood Prince", "J. K. Rowling", 300),
  new Book("Harry Potter and the Deathly Hallows", "J. K. Rowling", 300),
];

function addBookToLibrary(title, author, pages) {
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  addBookCard(newBook);
}

const cardContainer = document.querySelector(".card-container");
const showFormButton = document.querySelector("#show-form-button");
const newBookForm = document.querySelector("#new-book-form");

myLibrary.forEach(addBookCard);

showFormButton.addEventListener("click", showForm);

window.addEventListener("click", hideForm);

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  addBookToLibrary(title, author, pages);
  hideForm();
});

function showForm() {
  newBookForm.classList.remove("hidden");
}

function hideForm(e) {
  if (e != undefined) {
    if (newBookForm.classList.contains("hidden")) return;
    if (e.target == showFormButton) return;
    if (newBookForm.contains(e.target)) return;
  }

  newBookForm.classList.add("hidden");
}

function addBookCard(book) {
  /*
   * <div class="card">
   *   <p class="title">title</p>
   *   <p class="author">author</p>
   *   <p class="pages">pages</p>
   *   <p class="status">status</p>
   *   <div>
   *     <button>status</button>
   *     <button>delete</button>
   *   </div>
   * </div>
   */
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");

  ["title", "author", "pages", "status"].forEach((attr) => {
    let data = document.createElement("p");
    card.appendChild(data);
    data.classList.add(attr);
    data.textContent = book[attr];
  });

  let buttonsDiv = document.createElement("div");
  card.appendChild(buttonsDiv);
  buttonsDiv.classList.add("card-buttons");

  let changeStatusButton = document.createElement("button");
  buttonsDiv.appendChild(changeStatusButton);
  changeStatusButton.innerHTML =
    "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='currentColor' d='M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z' /></svg>";
  changeStatusButton.addEventListener("click", () => changeStatus(book, card));

  let deleteButton = document.createElement("button");
  buttonsDiv.appendChild(deleteButton);
  deleteButton.innerHTML =
    "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='currentColor' d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z' /></svg>";
  deleteButton.addEventListener("click", () => deleteBook(book, card));

  switch (book.status) {
    case BookStatus.notStarted:
      card.style.border = "1px dashed black";
      break;
    case BookStatus.reading:
      card.style.border = "1px solid yellow";
      break;
    case BookStatus.finished:
      card.style.border = "1px solid green";
      break;
    default:
      break;
  }
}

function changeStatus(book, card) {
  switch(book.status) {
    case BookStatus.notStarted:
      setStatus(book, card, BookStatus.reading);
      card.style.border = "1px solid yellow";
      break;
    case BookStatus.reading:
      setStatus(book, card, BookStatus.finished);
      card.style.border = "2px solid green";
      break;
    case BookStatus.finished:
      setStatus(book, card, BookStatus.notStarted);
      card.style.border = "1px dashed black";
      break;
    default: break;
  }
}

function setStatus(book, card, status) {
  let statusDisplay = card.querySelector(".status");

  book.status = status;
  statusDisplay.textContent = book.status;
}

function deleteBook(book, card) {
  let bookIndex = myLibrary.indexOf(book);
  myLibrary.splice(bookIndex, 1);
  cardContainer.removeChild(card);
}
