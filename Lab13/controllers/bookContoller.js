const Book = require("../models/book");

// CREATE
exports.save = (req, res, next) => {
    console.log("Inside Create Controller")
    const book = req.body;
    console.log(book);
    const createdBook = new Book(
        null,
        book.title,
        book.isbn,
        book.publishedDate,
        book.author
    );
    console.log(createdBook);
    const savedBook = createdBook.save();
    res.status(201).json(savedBook);
};

// READ
exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.getAll());
};

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.getBookById(req.params.bookId));
};

// UPDATE
exports.update = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(
        req.params.bookId,
        book.isbn,
        book.publishedDate,
        book.author
    ).update();
    res.status(200).json(updatedBook);
};

// DELETE
exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.bookId);
    res.status(200).end();
};
