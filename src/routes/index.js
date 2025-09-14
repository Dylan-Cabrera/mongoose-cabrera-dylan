import { Router } from "express";
import { authorRouter } from "./author.routes.js";
import { bookRouter } from "./book.routes.js";
import { libraryCardRouter } from "./libraryCard.routes.js";
import { memberRouter } from "./member.routes.js";
import { publisherRouter } from "./publisher.routes.js";

export const routes = Router();

routes.use(authorRouter);
routes.use(bookRouter);
routes.use(libraryCardRouter);
routes.use(memberRouter);
routes.use(publisherRouter);