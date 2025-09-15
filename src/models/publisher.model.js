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
},
{
    versionKey: false,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

publisherSchema.virtual("books", {
    ref: "Book",
    localField: "_id",
    foreignField: "publisher_id"
})


export const PublisherModel = model("Publisher", publisherSchema);