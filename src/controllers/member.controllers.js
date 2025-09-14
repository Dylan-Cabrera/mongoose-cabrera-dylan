import { MemberModel } from "../models/member.model.js";

export const createMember = async (req,res) => {
    const {first_name, last_name, registration_date, status, contact, } = req.body;
    try {
        const newMember = await MemberModel.create({first_name, last_name, registration_date, status, contact});
        
        res.status(201).json({
            msg: "Socio creado correctamente",
            data: newMember
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getMembers = async (req,res) => {
    try {
        const members = await MemberModel.find();

        res.status(200).json({
            data: members
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const getMemberById = async (req,res) => {
    try {
         const member = await MemberModel.findById(req.params.id);

         res.status(200).json({
            data: member
         });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const updateMember = async (req,res) => {
    try {
        const updateMember = await MemberModel.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true}
        );

        res.status(200).json({
            msg: "Socio actualizado correctamente",
            data: updateMember
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};

export const deleteMember = async (req,res) => {
    try {
        const deleteMember = await MemberModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Socio eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error interno del servidor"
        });
        console.log(error);
    }
};
