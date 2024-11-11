import express from "express";
const router = express.Router();
import { authController } from "../controllers/auth.controller.js";


router.get('/signup', authController.signup);
router.get('/login', authController.login);
router.get('/logout', authController.logout);


export default router;