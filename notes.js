// Fetch Lab Notes

fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => console.log(data))
/*
The first line of code fetches the requested data from the API.
In the 2nd line, we use the json() method of the Response interface to render the API's response as plain old JavaScript object (POJO). Because we're using arrow syntax, the object is returned & passed to the next then().
Finally, in the second then(), the console.log() prints the JavaScript object to our console.
*/
// LOG: Promise {<pending>}
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {url: 'https://anapioficeandfire.com/api/books/1', name: 'A Game of Thrones', isbn: '978-0553103540', authors: Array(1), numberOfPages: 694, …}
// 1: {url: 'https://anapioficeandfire.com/api/books/2', name: 'A Clash of Kings', isbn: '978-0553108033', authors: Array(1), numberOfPages: 768, …}
// 2: {url: 'https://anapioficeandfire.com/api/books/3', name: 'A Storm of Swords', isbn: '978-0553106633', authors: Array(1), numberOfPages: 992, …}
// 3: {url: 'https://anapioficeandfire.com/api/books/4', name: 'The Hedge Knight', isbn: '978-0976401100', authors: Array(1), numberOfPages: 164, …}
// 4: {url: 'https://anapioficeandfire.com/api/books/5', name: 'A Feast for Crows', isbn: '978-0553801507', authors: Array(1), numberOfPages: 784, …}
// 5: {url: 'https://anapioficeandfire.com/api/books/6', name: 'The Sworn Sword', isbn: '978-0785126508', authors: Array(1), numberOfPages: 152, …}
// 6: {url: 'https://anapioficeandfire.com/api/books/7', name: 'The Mystery Knight', isbn: '978-0765360267', authors: Array(1), numberOfPages: 416, …}
// 7: {url: 'https://anapioficeandfire.com/api/books/8', name: 'A Dance with Dragons', isbn: '978-0553801477', authors: Array(1), numberOfPages: 1040, …}
// 8: {url: 'https://anapioficeandfire.com/api/books/9', name: 'The Princess and the Queen', isbn: '978-0765332066', authors: Array(1), numberOfPages: 784, …}
// 9: {url: 'https://anapioficeandfire.com/api/books/10', name: 'The Rogue Prince', isbn: '978-0345537263', authors: Array(1), numberOfPages: 832, …}



// My Solution








// Lab Solution