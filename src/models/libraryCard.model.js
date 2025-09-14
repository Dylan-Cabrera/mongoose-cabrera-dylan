import { model, Schema, Types } from "mongoose";

const libraryCardSchema = new Schema({
    member_id: {
        type: Types.ObjectId, 
        require: true
    },
    card_number: {
        type: Number,
        require: true
    },
    issue_date: {
        type: Date,
        require: true
    },
    expiration_date: {
        type: Date,
        require: true
    }
},
{
    versionKey: false
});

export const LibraryCardModel = model("Library_Card", libraryCardSchema);