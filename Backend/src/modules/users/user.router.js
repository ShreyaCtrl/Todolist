import express from "express";
import { addUser, findUser } from "./user.controller.js"; // Adjust the path accordingly

const router = express.Router();

router.post("/signup", addUser);
router.post("/login", findUser);

export default router;
