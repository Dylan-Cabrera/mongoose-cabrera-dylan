import { Router } from "express";
import {createPublisher, deletePublisher, getPublisher, getPublisherById, updatePublisher} from "../controllers/publisher.controllers.js"

export const publisherRouter = Router();

publisherRouter.get("/publishers", getPublisher)
publisherRouter.get("/publishers/:id", getPublisherById)
publisherRouter.post("/publishers", createPublisher)
publisherRouter.put("/publishers/:id", updatePublisher)
publisherRouter.delete("/publishers/:id", deletePublisher)