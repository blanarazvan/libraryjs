const myLibrary = [

];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    this.id = id;
}

function addBooksToLibrary(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
        this.createBook = function () {
            myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID()));
        }
}
function showLibrary () {
    myLibrary.forEach(book => {
        return book;
    });
}
/*
const dune = new addBooksToLibrary("Dune", "Frank Herbert", "412 pages", "read");
dune.createBook();
const prideAndPrejudice = new addBooksToLibrary("Pride and Prejudice", "Jane Austen", "279 pages", "not read yet");
prideAndPrejudice.createBook();
const harryPotter = new addBooksToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "309 pages", "read");
harryPotter.createBook();
const nineteenEightyFour = new addBooksToLibrary("1984", "George Orwell", "328 pages", "not read yet");
nineteenEightyFour.createBook();
const toKillAMockingbird = new addBooksToLibrary("To Kill a Mockingbird", "Harper Lee", "281 pages", "read");
toKillAMockingbird.createBook();
const theHobbit = new addBooksToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
theHobbit.createBook();
*/
showLibrary();
const newBook = document.querySelector(".new");
const dialog = document.getElementById("dialog");
const close = document.querySelector("#close");
const submit = document.querySelector("#submit");
const bookForm = document.getElementById("bookForm");

newBook.addEventListener("click", () => {
    dialog.showModal();
    submit.addEventListener("click", (e) => {
       
    
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
    
        const newEntry = new addBooksToLibrary(title, author, pages + " pages", read);
        newEntry.createBook();
        let table = document.querySelector(".table");
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
        <h3> ${newEntry.title}</h3>
        <p><strong>Author:</strong> ${newEntry.author}</p>
        <p><strong>Pages:</strong> ${newEntry.pages}</p>
        <p><strong>Status:</strong> ${newEntry.read}</p>
        <button class="remove">Remove </button>
        `;
        card.querySelector(".remove").addEventListener("click", () => {
            card.remove();

            const index = myLibrary.indexOf(newEntry);
            if (index > -1){
                myLibrary.splice(index, 1);
            }
        });
        
        document.getElementById("bookTable").appendChild(card);
        e.preventDefault();
        dialog.close();
    });

});


close.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});
