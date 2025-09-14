import { Router } from "express";
import { createCard, deleteCard, getCardById, getCards, updateCard } from "../controllers/libraryCard.controllers.js";

export const libraryCardRouter = Router();

libraryCardRouter.get("/cards", getCards)
libraryCardRouter.get("/cards/:id", getCardById)
libraryCardRouter.post("/cards", createCard)
libraryCardRouter.put("/cards/:id", updateCard)
libraryCardRouter.delete("/cards/:id", deleteCard)