let books = [
{
    title: "Boys to men",
    author: "Jack Sparrow"
},
{
    title: "How to Kill a Mockingbird",
    author: "Harper Lee"
}
]

function addBook(title, author){
    books.push({
        title,
        author
    });
}

addBook("How I met your mother","Janet Jackson");
addBook("Second book at bookshop","Prof Fred")
console.log(books);

function removeBook(title) {
    books = books.filter(book => book.title !== title);
}

removeBook("Second book at bookshop");
console.log(books);

const bookList = document.querySelector('#book-list');

books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p>by ${book.author}</p>
        <p>Published in ${book.published}</p>
    `;

    bookList.appendChild(bookElement);
});

const form = document.querySelector('#book-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    addBook(title, author);

    const bookElement = document.createElement('div');
    bookElement.innerHTML = `
        <h2>${title}</h2>
        <p>by ${author}</p>
        <p>Published in 2020</p>
    `;

    bookList.appendChild(bookElement);
});