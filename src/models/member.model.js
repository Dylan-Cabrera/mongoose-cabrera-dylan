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
    status: {
        type: String,
        enum: ["active", "inactive", "suspended"],
        default: "active"
    },
    contact: {
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
});

export const MemberModel = model("Member", memberSchema);