import express from "express";
import "dotenv/config";
import { StartDB } from "./src/config/database.js";

const app = express();
const PORT = process.env.PORT;

StartDB();
app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
});