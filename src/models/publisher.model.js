import { model, Schema } from "mongoose";

const publisherSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true 
    }
});

export const PublisherModel = model("Publisher", publisherSchema);