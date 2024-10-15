import { createTransaction } from "../controllers/transaction.controller";
import { Router } from "express";
const router = Router()

router.post('/', createTransaction)

export default router;