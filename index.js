// Fetch Lab

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// Practice
/*
1. The 5th book in the series
// https://anapioficeandfire.com/api/books/5
2. The 1031st character in the series
// https://anapioficeandfire.com/api/characters/1031
3. The total number of pages of all the books


// Deliverables
Include a fetch request inside the fetchBooks() function
*/