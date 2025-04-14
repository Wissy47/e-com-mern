import express from "express";
import { authUser, login,logout,signup } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.get("auth-user", authUser);

export default router;