// Globals Vars
const myLibrary = [];
const container = document.querySelector(".list-group");

// Functions

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, page, read) {
  let book = new Book(title, author, page, read);
  myLibrary.push(book);
}

function listBooks() {
  for (let i in myLibrary) {
    container.innerHTML += `
    <li class="list-group-item">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">${myLibrary[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${myLibrary[i].author}</h6>
    <p class="card-text">${myLibrary[i].read} <br> ${myLibrary[i].pages} </p>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>
    </li>
    `;
    console.log(myLibrary[i]);
  }
}

addBookToLibrary("Lord of the ring", "JRR Tolkien", 1654, "Finish");
addBookToLibrary("Elric", "Moorcock", 893, "Not read yet");

listBooks();

/* global bootstrap: false */
(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();
