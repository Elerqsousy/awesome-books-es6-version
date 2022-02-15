import Book from './book_class_module.js';

export default class Books {
  constructor() {
    this.books = [];
  }

  addBooks(title, author, id) {
    const b = new Book(title, author, id); 
    this.books.push(b); 
  }

  getBooks() {
    return this.books;
  }

  removeBook(id) {
    const books = this.books.filter((b) => b.id.toString() !== id);
    this.books = books;
  }
}
