// Globals Vars
const myLibrary = [];
const container = document.querySelector(".list-group");
const modalel = document.getElementById("modal");
const form = document.getElementById("form");

// Functions

function Book(title, author, pages, read) {
  // (string, string, int, bool)
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeStatus = function () {
  this.read ? false : true;
};

function fetchBookInfo() {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    pages = document.getElementById("pages").value,
    status = document.getElementById("read").value;
  addBookToLibrary(title, author, pages, status);
  document.getElementById("form").reset();
}

function bookReadStatus(status) {
  let txt = "";
  if (status === true) {
    txt = "Book Finish";
  } else {
    txt = "Book Not Finish";
  }
  return txt;
}

function addBookToLibrary(title, author, page, read) {
  let book = new Book(title, author, page, read);
  myLibrary.push(book);
  listBooks();
}

function listBooks() {
  for (let i in myLibrary) {
    container.innerHTML += `
    <li class="list-group-item" data-index-number="${i}">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">${myLibrary[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${
      myLibrary[i].author
    }</h6>
    <p class="card-text">${bookReadStatus(myLibrary[i].read)} <br> ${
      myLibrary[i].pages
    } pages</p>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>
    </li>
    `;
    console.log(myLibrary[i]);
  }
}

function clearList() {
  myLibrary = [];
}

/* addBookToLibrary("Lord of the ring", "JRR Tolkien", 1654, true);
addBookToLibrary("Elric", "Moorcock", 893, false); */

document.getElementById("submit").addEventListener("click", function (e) {
  if (myLibrary.length != 0) {
    let ul = document.getElementById("list");
    while (ul.firstChild) ul.removeChild(ul.firstChild);
  }
  fetchBookInfo();
  e.preventDefault(); // Cancel the native event
});

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
