import { body, param } from "express-validator";
import { MemberModel } from "../models/member.model.js";
import { LibraryCardModel } from "../models/libraryCard.model.js";


export const createCardValidations = [
    body("member_id").notEmpty()
    .custom( async (value) => {
        const member = await MemberModel.findById(value);
        if(!member) {
            throw new Error("No existe un socio con ese id")
    
    }})
]

export const updateCardValidations = [
    body("member_id").notEmpty()
    .custom( async (value) => {
        const member = await MemberModel.findById(value);
        if(!member) {
            throw new Error("No existe un socio con ese id")
    
    }})
    ,
    param("id")
    .custom( async (value) => {
        const card = await LibraryCardModel.findById(value);
        if(!card) {
            throw new Error("No existe el carnet que intenta actualizar")
    
    }})
]