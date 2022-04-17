let books = [];

class Book {
    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    // CREATE
    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    // READ
    static getAll() {
        return books;
    }

    static getBookById(bookId) {
        const index = books.findIndex((b) => b.id == bookId);
        if (index > -1) return books[index];
        else throw new Error("Not Found");
    }

    // UPDATE
    update() {
        console.log("Inside update --> Model");
        console.log(this);
        const index = books.findIndex((p) => p.id == this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error("NOT Found");
        }
    }

    // DELETE
    static deleteById(bookId) {
        const index = books.findIndex((p) => p.id === bookId);
        if (index > -1) {
            books = books.filter((p) => p.id !== bookId);
        } else {
            throw new Error("NOT Found");
        }
    }
}

module.exports = Book;
