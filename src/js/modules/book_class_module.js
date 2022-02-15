const randomId = () => Math.round(Math.random() * 10000);
export default class Book {
  constructor(title, author, id) {
    this.id = id || randomId();
    this.title = title;
    this.author = author;
  }
}
