import { Router } from "express";
import { authToken } from "../controllers/authCcontroller";
import type { AuthRequest } from "../controllers/authCcontroller";
import {me} from '../controllers/userController'

const router = Router()

router.get('/', authToken, me)

export default router