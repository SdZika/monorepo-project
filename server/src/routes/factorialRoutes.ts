import { Router } from "express";
import { getFactorial } from "../controllers/factorialController.js";

const router = Router()

router.get("/", getFactorial)

export default router