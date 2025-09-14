import { Router } from "express";
import {getMembers, getMemberById, createMember, updateMember, deleteMember} from "../controllers/member.controllers.js"


export const memberRouter = Router();

memberRouter.get("/members", getMembers)
memberRouter.get("/members/:id", getMemberById)
memberRouter.post("/members", createMember)
memberRouter.put("/members/:id", updateMember)
memberRouter.delete("/members/:id", deleteMember)