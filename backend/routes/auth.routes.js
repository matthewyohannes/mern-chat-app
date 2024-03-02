import express from "express"
import {signup, login, logout} from '../controllers/auth.controller.js'

const router = express.Router();


// calls one of these functions depending on which url endpoint is being used
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;