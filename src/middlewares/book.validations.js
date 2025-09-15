import { body, param } from "express-validator";
import { AuthorModel } from "../models/author.model.js";
import { BookModel } from "../models/book.model.js";


export const createBookValidations = [
    body("author_id").notEmpty()
    .custom( async (value) => {
        const author = await AuthorModel.findById(value);
        if(!author) {
            throw new Error("No existe un autor con ese id")
    
    }})
]

export const updateBookValidations = [
    body("author_id").notEmpty()
    .custom( async (value) => {
        const author = await AuthorModel.findById(value);
        if(!author) {
            throw new Error("No existe un autor con ese id")
    
    }})
    ,
    param("id")
    .custom( async (value) => {
        const book = await BookModel.findById(value);
        if(!book) {
            throw new Error("No existe el libro que intenta actualizar")
    
    }})
]
