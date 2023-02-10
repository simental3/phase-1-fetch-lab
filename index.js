// Fetch Lab

// Fetchers
function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(data => renderBooks(data))
}

// Render Function
function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerHTML = book.name;
        main.appendChild(h2);
    });
}

// Event Listener
document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
});

// refactored:
document.addEventListener('DOMContentLoaded', () => fetchBooks());


// Deliverables
/*
1. sends a fetch request to 'https://anapioficeandfire.com/api/books' (391ms)
2. renders book titles into the DOM by passing a JSON object to renderBooks()
*/

// Practice
// 1. The 5th book in the series
// https://anapioficeandfire.com/api/books/5
fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => data[5].name)
// 2. The 1031st character in the series
// https://anapioficeandfire.com/api/characters/1031
fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
        let bookCharacter = '';
        data.forEach(book => {            
            const char = book.characters.find((character) => character.includes('1031'));
            if (char !== undefined) {
                bookCharacter = char;
            }
        })
        return bookCharacter;
    });

// 3. The total number of pages of all the books
// We can use reduce on the response array & accumulate the value of each book object's numberOfPages! For Example:
fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => data.reduce((accumulator, currentValue) => accumulator + currentValue.numberOfPages), 0) // You can do whatever you want to the data inside the 2nd .then!
