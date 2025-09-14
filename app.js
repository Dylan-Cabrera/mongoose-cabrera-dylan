import express from "express";
import "dotenv/config";
import { StartDB } from "./src/config/database.js";
import { AuthorModel } from "./src/models/author.model.js";
import { BookModel } from "./src/models/book.model.js";
import { LibraryCardModel } from "./src/models/libraryCard.model.js";
import { MemberModel } from "./src/models/member.model.js";
import { PublisherModel } from "./src/models/publisher.model.js";
import { routes } from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT;

StartDB();
app.use(express.json());
app.use("/api", routes)

app.listen(PORT, ()=> {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
});