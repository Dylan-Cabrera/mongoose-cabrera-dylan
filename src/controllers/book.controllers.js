import { BookModel } from "../models/book.model.js";

export const createBook = async (req,res) => {
    const {title, year_published, author_id, publisher_id, edition_info} = req.body;
    try {
        const newBook = await BookModel.create({title, year_published, author_id, publisher_id, edition_info});
        
        res.status(201).json({
            msg: "Libro creado correctamente",
            data: newBook
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getBook = async (req,res) => {
    try {
        const books = await BookModel.find();

        res.status(200).json({
            data: books
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getBookById = async (req,res) => {
    try {
         const book = await BookModel.findById(req.params.id);

         res.status(200).json({
            data: book
         });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateBook = async (req,res) => {
    try {
        const updateBook = await BookModel.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true}
        );

        res.status(200).json({
            msg: "Libro actualizado correctamente",
            data: updateBook
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteBook = async (req,res) => {
    try {
        const deleteBook = await BookModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Libro eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};