const myLibrary = [

];
class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
}

class addBooksToLibrary{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
    }

    createBook () {
        const book =  new Book(title, author, pages, read, crypto.randomUUID());
        myLibrary.push(book);
        return book;
    }
    showLibrary () {
        myLibrary.forEach(book => {
        console.log(book)
        });
    }   
}




const newBook = document.querySelector(".new");
const dialog = document.getElementById("dialog");
const close = document.querySelector("#close");
const submit = document.getElementById("submit");
const bookForm = document.getElementById("bookForm");
const bookTable = document.getElementById("bookTable");
        

newBook.addEventListener("click", () => {
    dialog.showModal();
});
document.getElementById("bookForm").addEventListener("submit", (e) => {
    
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
    
        const newEntry = new addBooksToLibrary(title, author, pages + " pages", read);
        newEntry.createBook();
        
        console.log(newEntry.id)
        
        const card = document.createElement("div");
        bookTable.appendChild(card);
        card.classList.add("book-card");
        card.setAttribute("data-id", newEntry.id);
        card.setAttribute("data-read", newEntry.read);

        card.innerHTML = `
        <h3> ${newEntry.title}</h3>
        <p><strong>Author:</strong> ${newEntry.author}</p>
        <p><strong>Pages:</strong> ${newEntry.pages}</p>
        <p><strong>Status:</strong><span class="readStatus"> ${newEntry.read}</span></p>
        <button class="remove">Remove </button>
        <button class="status">Change Status </button>
        `;
        card.querySelector(".remove").addEventListener("click", () => {
            const bookId = card.getAttribute("data-id");
        
            const index = myLibrary.findIndex(book => book.id === bookId);
            if (index > -1){
                myLibrary.splice(index, 1);
                
            }

            card.remove();
            card.removeAttribute("data-id");
        });
        card.querySelector(".status").addEventListener("click", () => {
            const bookStatus = card.getAttribute("data-read");
            if(bookStatus === "Read"){
                const readStatus = card.querySelector(".readStatus");
                newEntry.read = "Not read yet";
                card.setAttribute("data-read", newEntry.read);
                readStatus.textContent = ` ${newEntry.read}`;
            } 
            if ( bookStatus === "Not read yet"){
                const readStatus = card.querySelector(".readStatus");
                newEntry.read = "Read";
                card.setAttribute("data-read", newEntry.read);
                readStatus.textContent = ` ${newEntry.read}`;
            }
        });
        e.preventDefault();
        dialog.close();
        document.getElementById("bookForm").reset();
});

close.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});
