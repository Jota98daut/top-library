class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read ? read : false;
  }
}

let myLibrary = [];

function addBookToLibrary(title, author, read) {
  let newBook = new Book(title, author, read);
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
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, read);
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
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card");

  let title = document.createElement("p");
  card.appendChild(title);
  title.classList.add("book-title");
  title.textContent = book.title;

  let author = document.createElement("p");
  card.appendChild(author);
  author.classList.add("author");
  author.textContent = book.author;
}
