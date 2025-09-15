import { Router } from "express";
import { createCard, deleteCard, getCardById, getCards, updateCard } from "../controllers/libraryCard.controllers.js";
import {validator} from "../middlewares/validator.js"
import { createCardValidations, updateCardValidations } from "../middlewares/libraryCard.validations.js";

export const libraryCardRouter = Router();

libraryCardRouter.get("/cards", getCards)
libraryCardRouter.get("/cards/:id", getCardById)
libraryCardRouter.post("/cards", createCardValidations, validator, createCard)
libraryCardRouter.put("/cards/:id", updateCardValidations, validator, updateCard)
libraryCardRouter.delete("/cards/:id", deleteCard)