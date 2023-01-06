let myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read ? read : false;
}

function addBookToLibrary(title, author, read) {
  let newBook = new Book(title, author, read);
  myLibrary.push(newBook);
}

addBookToLibrary("A Passage to India", "E. M. Foster");
addBookToLibrary("Daisy Jones and the Six", "Taylor Jenkins Reid");
addBookToLibrary("Carmilla", "Sherdain Le Fanu");
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari");
addBookToLibrary("At the Precipice", "R. R. Quan");
addBookToLibrary("Sanctuary", "William Faulkner");
addBookToLibrary("A Passage to India", "E. M. Foster");
addBookToLibrary("A Passage to India", "E. M. Foster");
addBookToLibrary("Daisy Jones and the Six", "Taylor Jenkins Reid");
addBookToLibrary("Carmilla", "Sherdain Le Fanu");
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari");
addBookToLibrary("Daisy Jones and the Six", "Taylor Jenkins Reid");
addBookToLibrary("Carmilla", "Sherdain Le Fanu");
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari");
addBookToLibrary("At the Precipice", "R. R. Quan");
addBookToLibrary("Sanctuary", "William Faulkner");

const cardContainer = document.querySelector(".card-container");

myLibrary.forEach(addBookCard);

function addBookCard(book) {
  let card = document.createElement("div");
  cardContainer.appendChild(card);
  card.classList.add("card")

  let title = document.createElement("p");
  card.appendChild(title);
  title.classList.add("book-title");
  title.textContent = book.title;
  
  let author = document.createElement("p");
  card.appendChild(author);
  author.classList.add("author");
  author.textContent = book.author;
}
