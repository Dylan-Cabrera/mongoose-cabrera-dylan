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
    versionKey: false
});

export const AuthorModel = model("Author", authorSchema);