import express from "express";
import { addEmail, getMails } from "../controller/email-controller.js";
//  router object
const router = express.Router();

router.post("/add", addEmail);
router.get("/", getMails);
export default router;
