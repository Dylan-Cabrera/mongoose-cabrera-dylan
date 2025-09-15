import { PublisherModel } from "../models/publisher.model.js";

export const createPublisher = async (req,res) => {
    const {name, country} = req.body;
    try {
        const newPublisher = await PublisherModel.create({name, country});
        
        res.status(201).json({
            msg: "Editorial creada correctamente",
            data: newPublisher
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getPublisher = async (req,res) => {
    try {
        const publishers = await PublisherModel.find().populate("books");

        res.status(200).json({
            data: publishers
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getPublisherById = async (req,res) => {
    try {
         const publisher = await PublisherModel.findById(req.params.id);

         res.status(200).json({
            data: publisher
         });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updatePublisher = async (req,res) => {
    try {
        const updatePublisher = await PublisherModel.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true}
        );

        res.status(200).json({
            msg: "Editorial actualizada correctamente",
            data: updatePublisher
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deletePublisher = async (req,res) => {
    try {
        const deletePublisher = await PublisherModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Editorial eliminada correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};