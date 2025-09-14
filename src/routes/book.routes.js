import { Router } from "express";
import { createBook, deleteBook, getBook, getBookById, updateBook } from "../controllers/book.controllers.js";

export const bookRouter = Router();

bookRouter.get("/books/", getBook)
bookRouter.get("/books/:id", getBookById)
bookRouter.post("/books/",createBook)
bookRouter.put("/books/:id", updateBook)
bookRouter.delete("/books/:id", deleteBook)