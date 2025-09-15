import { BookModel } from "../models/book.model.js";


export const createBookPublisher = async (req,res) => {
    const {publisher_id, book_id} = req.body;
    try {
        const book = await BookModel.findByIdAndUpdate(book_id,
            {
                $push: {publisher_id: publisher_id}
            },
            {new: true}
        );

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
}