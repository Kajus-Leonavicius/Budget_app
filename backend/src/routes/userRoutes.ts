import { Router } from "express";
import { authToken } from "../controllers/authCcontroller";
import type { AuthRequest } from "../controllers/authCcontroller";

const router = Router()

router.get('/', authToken, (req: AuthRequest, res)=>{
    res.json(req.user)
})

export default router