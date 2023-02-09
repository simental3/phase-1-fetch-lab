// USING FETCH() LESSON NOTES

/*
AJAX: 1. Delivers an initial, engaging page using HTML & CSS which browsers render QUICKLY
      2. THEN we use JavaScript to add more to the DOM, behind the scenes
AJAX relies on several technologies:
    - Things called Promises                - A serialization format called JSON for "JavaScript Object Notation"
    - Things called XMLHttpRequestObjects   - asynchronous Input / Output   - the event loop
fetch() loads additional data AFTER information is rpesented to the user (similar to the AJAX technique)
*/
fetch("string representing a URL to a data source")
    .then(function (response) {
        return response.json();
    })
.then(function (data) {
    // Use the data from the response to do DOM manipulation
})

// refactored:
fetch("string representing a URL to a data source")
    .then(response => response.json())
    .then(function (data) {
    //
    })


/*
  Here we are calling `fetch()` and passing a URL to a data source as the argument. The function call returns a Promise object that represents
  what the data source sent back. It does *not* return the actual content. (More about this later.)
*/
fetch("string representing a URL to a data source")
  /*
    Next, we call the `then()` method on the Promise object returned by calling `fetch()`. `then()` takes one argument: a callback function. 
    (More on Promises later!)

    Inside the callback function, we do whatever processing we need on the object, in this case, converting it from JSON using the built-in
    `json()` method. (Another commonly-used method is `text()`, which will convert the response into plain text.) The `json()` method returns
    a Promise, which we return from our callback function.

    Note that we *have to return* the content that we've gotten out of the response and converted from JSON in order to use the data in the
    next then() method call.

    This first callback function is usually only one line: returning the content from the response after converting it into the format we need.
  */
    .then(function (response) {
        return response.json();
    })
  /*
    This time, the `then()` method is receiving the object that we returned from the first call to `then()` (our parsed JSON object). We capture
    the object in the parameter `data` and pass it into a second callback function, where we will write code to do DOM manipulation using the
    data returned from the server
  */
    .then(function (data) {
    // Use the actual data to do DOM manipulation
    });


fetch('http://api.open-notify.org/astros.json')
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

// refactored (maybe it works???):
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => console.log(data))


fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
        console.log(`Holy cow! There are ${data["number"]} humans in space.`);
    })
// LOG: Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
//      {message: 'success', people: Array(10), number: 10}message: "success"number: 10people: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}][[Prototype]]: Object
//      Holy cow! There are 10 humans in space.


fetch('http://api.open-notify.org/astros.json').then(response => response.json()).then(json => document.write(`Holy cow! There are ${json["number"]} humans in space.`));