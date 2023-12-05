// Filename: sophisticated_app.js

// This JavaScript code demonstrates a sophisticated and elaborate application
// It emulates a virtual library management system with various functionalities and complex algorithms

// Utility functions
function formatDate(date) {
  // Format the given date as 'YYYY-MM-DD'
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Main library management system class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    // Add a book to the library collection
    this.books.push(book);
  }

  removeBook(book) {
    // Remove a book from the library collection
    const index = this.books.findIndex((b) => b === book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  addUser(user) {
    // Add a user to the library
    this.users.push(user);
  }

  removeUser(user) {
    // Remove a user from the library
    const index = this.users.findIndex((u) => u === user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  checkoutBook(book, user) {
    // Checkout a book from the library
    const bookIndex = this.books.findIndex((b) => b === book);
    const userIndex = this.users.findIndex((u) => u === user);

    if (bookIndex === -1) {
      console.log("Book not found in library");
      return;
    }

    if (userIndex === -1) {
      console.log("User not found in library");
      return;
    }

    this.books.splice(bookIndex, 1);
    user.borrowedBooks.push(book);
    book.borrowedBy = user;
    book.borrowedAt = new Date();
  }

  returnBook(book) {
    // Return a book to the library
    const bookIndex = book.borrowedBy.borrowedBooks.findIndex((b) => b === book);

    if (bookIndex === -1) {
      console.log("Book not borrowed by any user");
      return;
    }

    const borrowedDate = book.borrowedAt;
    const currentDate = new Date();
    const daysBorrowed = Math.floor((currentDate - borrowedDate) / (1000 * 60 * 60 * 24));

    book.borrowedBy.borrowedBooks.splice(bookIndex, 1);
    book.borrowedBy = null;
    book.borrowedAt = null;

    if (daysBorrowed > 30) {
      console.log("Book returned late! Fine imposed.");
    }
  }
}

// Book class
class Book {
  constructor(title, author, publicationDate) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.borrowedBy = null;
    this.borrowedAt = null;
  }
}

// User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }
}

// Example usage
const library = new Library("My Library");

const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", new Date(2008, 4, 1));
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", new Date(2011, 11, 4));
const book3 = new Book("JavaScript: The Definitive Guide", "David Flanagan", new Date(1996, 2, 15));

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

library.addUser(user1);
library.addUser(user2);

library.checkoutBook(book1, user1);
library.checkoutBook(book2, user2);

library.returnBook(book1);

console.log(library.books.length); // Output: 2
console.log(user1.borrowedBooks.length); // Output: 0
console.log(user2.borrowedBooks.length); // Output: 1