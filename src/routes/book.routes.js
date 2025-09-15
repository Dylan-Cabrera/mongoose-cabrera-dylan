import { Router } from "express";
import { createBook, deleteBook, getBook, getBookById, updateBook } from "../controllers/book.controllers.js";
import { createBookPublisher } from "../controllers/book_publisher.controllers.js";

export const bookRouter = Router();

bookRouter.get("/books/", getBook)
bookRouter.get("/books/:id", getBookById)
bookRouter.post("/books/",createBook)
bookRouter.put("/books/:id", updateBook)
bookRouter.delete("/books/:id", deleteBook)

//ruta pa añadir una editorial:
bookRouter.put("/books-publishers", createBookPublisher)