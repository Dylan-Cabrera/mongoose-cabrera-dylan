import mongoose from "mongoose";

export const StartDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/proyecto");
        console.log("Conectado a la base de datos")
        await mongoose.connection.dropDatabase()
    } catch (error) {
        console.log("Erro al conectar a la base de datos, error:" + error);
        process.exit(1); 
    }
};