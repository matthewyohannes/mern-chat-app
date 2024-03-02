import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

                        // protectRoute authorizes user before sending message to make sure logged in
router.post("/send/:id", protectRoute, sendMessage) // the colon signifies that the id value may vary depending on request
router.get("/:id", protectRoute, getMessages)



export default router;