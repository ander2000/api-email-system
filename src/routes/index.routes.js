import { Router } from "express";
import IndexService from "../services/index.service.js";
import {verifyPasswUserSistem} from "../middleware/loginUserSistem.js";
import { limiterV2 } from "../middleware/rateLimit.js";


const indexService = new IndexService();

const router = Router();

router.get("/", indexService.index);

router.get("/ping", indexService.ping);

router.post("/usersistem", limiterV2(10, 1), verifyPasswUserSistem, indexService.generateToken);

export default router;
