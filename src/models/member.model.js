import { model, Schema } from "mongoose";

const memberSchema = new Schema({
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
    registration_date: {
        type: Date,
        default: Date.now
    },
    contact: {
        _id: false,
        email: {
            type: String
        },
        phone: {
            type: Number
        },
        landline: {
            type: Number
        }
    }
},
{
    versionKey: false
});

export const MemberModel = model("Member", memberSchema);