import { model, Schema, Types } from "mongoose";

const authorSchema = new Schema({
    first_name: {
        type: String,
        trim: true, 
        require: true
    },
    last_name: {
        type: String,
        trim: true,
        require: true
    },
    nationality:{
        type: String
    },
    birth_date: {
        type: Date
    }
},
{
    versionKey: false,
    toJSON: {virtuals: true}, //necesarios para el populate sin referencia
    toObject: {virtuals: true}
});

authorSchema.virtual("books", {
    ref: "Book",
    localField: "_id",
    foreignField: "author_id"
})

export const AuthorModel = model("Author", authorSchema);