import { Router } from "express";
import  {verifyToken}  from "../middleware/auth.js";
import { limiterV2 } from "../middleware/rateLimit.js";
import SmsSystem from "../services/send_sms.service.js"

const smsSystem = new SmsSystem();

const router = Router();

router.post("/sendsms", limiterV2(50, 1), verifyToken, smsSystem.sendSms);

export default router;