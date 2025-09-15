import {body, param} from "express-validator"
import { BookModel } from "../models/book.model.js"
import { PublisherModel } from "../models/publisher.model.js";

export const BookPublisherValidations = [
    body("book_id").notEmpty()
    .custom( async (value) => {
        const book = await BookModel.findById(value);
        if(!book) {
            throw new Error("No existe un libro con ese id")
    
    }})

    ,
    body("publisher_id").notEmpty()
    .custom( async (value) => {
        const publisher = await PublisherModel.findById(value);
        if(!publisher) {
            throw new Error("No existe una editorial con ese id")
        }
    })
]