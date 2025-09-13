import { model, Schema, Types } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    year_published: {
        type: Date,
        require: true
    },
    author: {
        type: Types.ObjectId,
        require: true
    },
    publisher_id: {
        type: Types.ObjectId,
        ref: "Publisher",
        require: true
    },
    edition_info: {
        page_count: {
            type: Number,
            require: true
        },
        language: {
            type: String,
            require: true
        },
        binding_type: {
            type: String,
            require: true
        }
    }
});

export const BookModel = model("Book", bookSchema);