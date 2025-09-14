import { LibraryCardModel } from "../models/libraryCard.model.js";

export const createCard = async (req,res) => {
    const {member_id, card_number, issue_date, expiration_date} = req.body;
    try {
        const newCard = await LibraryCardModel.create({member_id, card_number, issue_date, expiration_date});
        
        res.status(201).json({
            msg: "Carnet de libreria creado correctamente",
            data: newCard
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getCards = async (req,res) => {
    try {
        const cards = await LibraryCardModel.find();

        res.status(200).json({
            data: cards
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getCardById = async (req,res) => {
    try {
         const card = await LibraryCardModel.findById(req.params.id);

         res.status(200).json({
            data: card
         });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateCard = async (req,res) => {
    try {
        const updateCard = await LibraryCardModel.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true}
        );

        res.status(200).json({
            msg: "Carnet de libreria actualizado correctamente",
            data: updateCard
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteCard = async (req,res) => {
    try {
        const deleteCard = await LibraryCardModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Carnet de libreria eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};
