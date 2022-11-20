import express from "express";
import {
  loginController,
  registerController,
} from "../controller/userController.js";

//  router object
const router = express.Router();

// routers
// POST || LOGIN

router.post("/login", loginController);

// POST || register user
router.post("/register", registerController);

export default router;
