import express from "express";
import protectRoute from "../middleware/protectRoute.js";

import { getUersToSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/', protectRoute, getUersToSidebar);


export default router;