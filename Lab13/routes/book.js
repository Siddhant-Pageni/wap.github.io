const express = require("express");
const bookController = require("../controllers/bookContoller");

const router = express.Router();

// CREATE
router.post("/", bookController.save);

// READ
router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBookById);

// UPDATE
router.put("/:bookId", bookController.update);

// DELETE
router.delete("/:bookId", bookController.deleteById);

module.exports = router;
