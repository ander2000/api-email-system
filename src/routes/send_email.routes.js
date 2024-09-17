import { Router } from "express";
import  {verifyToken}  from "../middleware/auth.js";
import { limiterV2 } from "../middleware/rateLimit.js";
import EmailSystem from "../services/send_email.service.js"


const emailSystem = new EmailSystem();

const router = Router();

router.post("/sendEmail", limiterV2(50, 1), verifyToken, emailSystem.sendEmail);

export default router;