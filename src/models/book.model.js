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
    author_id: {
        type: Types.ObjectId,
        require: true
    },
    publisher_id: {
        type: Types.ObjectId,
        ref: "Publisher",
        require: true
    },
    edition_info: {
        _id: false,
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
},
{
    versionKey: false
});

export const BookModel = model("Book", bookSchema);