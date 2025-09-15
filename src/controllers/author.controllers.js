import { AuthorModel } from "../models/author.model.js";
import { BookModel } from "../models/book.model.js";

export const createAuthor = async (req,res) => {
    const {first_name, last_name, nationality, birth_date} = req.body;
    try {
        const newAuthor = await AuthorModel.create({first_name, last_name, nationality, birth_date});
        
        res.status(201).json({
            msg: "Autor creado correctamente",
            data: newAuthor
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getAuthor = async (req,res) => {
    try {
        const authors = await AuthorModel.find().populate("books");

        res.status(200).json({
            data: authors
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getAuthorById = async (req,res) => {
    try {
         const author = await AuthorModel.findById(req.params.id).populate("books");

         res.status(200).json({
            data: author
         });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateAuthor = async (req,res) => {
    try {
        const updateAuthor = await AuthorModel.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true}
        );

        res.status(200).json({
            msg: "Autor actualizado correctamente",
            data: updateAuthor
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteAuthor = async (req,res) => {
    try {

        //eliminacion en cascada, cuando se borra un autor, tambien se borrar sus libros
        const author = await AuthorModel.findById(req.params.id).populate("books");

        for (const book of author.books) { //accede a los libros
            await BookModel.findByIdAndDelete(book._id); //recorre el array y borra los libros de a uno
        }

        await AuthorModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Autor eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};