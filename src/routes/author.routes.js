import { Router } from "express";
import { createAuthor, deleteAuthor, getAuthor, getAuthorById, updateAuthor } from "../controllers/author.controllers.js";

export const authorRouter = Router();

authorRouter.get("/authors", getAuthor)
authorRouter.get("/authors/:id", getAuthorById)
authorRouter.post("/authors", createAuthor)
authorRouter.put("/authors/:id", updateAuthor)
authorRouter.delete("/authors/:id", deleteAuthor)