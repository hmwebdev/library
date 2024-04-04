// Globals Vars
let myLibrary = [];
const form = document.getElementById("form");
const list = document.getElementById("list");

// Functions

function Book(title, author, pages, read) {
  // (string, string, int, bool)
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function fetchBookInfo() {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    pages = document.getElementById("pages").value,
    status = function () {
      selectElement = document.querySelector("#read");
      let output = selectElement.options[selectElement.selectedIndex].value;
      return output;
    };
  if (title == "" || author == "" || pages == "") {
    alert("Please enter a valid information for the appropriate field");
    listBooks();
  } else {
    addBookToLibrary(title, author, pages, status());
    form.reset();
  }
}

function addBookToLibrary(title, author, page, read) {
  let book = new Book(title, author, parseInt(page), read);
  myLibrary.push(book);
  listBooks();
}

function listBooks() {
  for (let i in myLibrary) {
    list.innerHTML += `
    <li class="list-group-item" data-index="${i}">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">${myLibrary[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${myLibrary[i].author}</h6>
    <p class="card-text">${myLibrary[i].read} <p> ${myLibrary[i].pages} pages</p></p>
    <a href="#" id="delete" class="card-link" data-index="${i}" onclick="deleteBook(this.getAttribute('data-index'))">Delete</a>
    <a href="#" id="status" class="card-link" onclick="changeStatus(${i})">Change status</a>
  </div>
</div>
    </li>
    `;
  }
}

function clearList() {
  if (list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
  myLibrary = [];
}

function clearBook() {
  if (list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

function deleteBook(id) {
  myLibrary.splice(id, 1);
  clearBook();
  listBooks();
}

function changeStatus(id) {
  myLibrary[id].read === "Book Finish" || myLibrary[id].read === "true"
    ? (myLibrary[id].read = "Book Not Finish")
    : (myLibrary[id].read = "Book Finish");
  clearBook();
  listBooks();
}

document.getElementById("submit").addEventListener("click", function (e) {
  if (myLibrary.length != 0) {
    let ul = document.getElementById("list");
    while (ul.firstChild) ul.removeChild(ul.firstChild);
  }
  fetchBookInfo();
  e.preventDefault(); // Cancel the native event
});

document.getElementById("clear").addEventListener("click", clearList);

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
