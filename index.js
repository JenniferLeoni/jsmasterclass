class Book {
    constructor(title, author, ISBN, availability = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availability = availability;
    }}

class Library {
    constructor() {
        this.books = [];
    } 
    addBook(book) {
        this.books.push(book);
    } 
    removeBook(ISBN) {
        this.books = this.books.filter((book) => book.ISBN !== ISBN);
    }
    displayAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach((book, index) => {
            if (book.availability) { 
                console.log(`${index+1}. ${book.title} by ${book.author}`);
            }
        });
    } }

class ReferenceBook extends Book { 
    constructor(title, author, ISBN, category, availability = true) { 
        super(title, author, ISBN, availability); 
        this.category = category; 
    } }

// Create instances of the Library, Book, and ReferenceBook classes 
const library = new Library(); 
// Add books to the library 
const book1 = new Book("The School for Good and Evil", "Soman Chainani", "9780743273566"); 
const book2 = new Book("Matahari", "Tere Liye", "9780060935468"); 
const book3 = new ReferenceBook("2003", "Jennifer Leoni", "9780451524936", "Fantasy Fiction"); 
const book4 = new Book("Kereta Api Misterius", "Enid Blyton", "9780060935469"); 

library.addBook(book1); 
library.addBook(book2); 
library.addBook(book3); 
library.addBook(book4);

// Display available books 
library.displayAvailableBooks(); console.log("\nRemoving book..."); 

// Remove a book from the library
library.removeBook("9780743273566"); 
 
// Display available books again
library.displayAvailableBooks();