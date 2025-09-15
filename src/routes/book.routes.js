import { Router } from "express";
import { createBook, deleteBook, getBook, getBookById, updateBook } from "../controllers/book.controllers.js";
import { createBookPublisher } from "../controllers/book_publisher.controllers.js";
import { BookPublisherValidations } from "../middlewares/book_publisher.validations.js";
import {validator} from "../middlewares/validator.js"
import {createBookValidations, updateBookValidations } from "../middlewares/book.validations.js";

export const bookRouter = Router();

bookRouter.get("/books/", getBook)
bookRouter.get("/books/:id", getBookById)
bookRouter.post("/books/",createBookValidations, validator, createBook)
bookRouter.put("/books/:id", updateBookValidations, validator, updateBook)
bookRouter.delete("/books/:id", deleteBook)

//ruta pa añadir una editorial:
bookRouter.put("/books-publishers", BookPublisherValidations, validator, createBookPublisher)