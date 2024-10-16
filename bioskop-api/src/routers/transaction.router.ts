import { createTransaction, findMoviesByDateAndTime } from "../controllers/transaction.controller";
import { Router } from "express";
const router = Router()

router.post('/', createTransaction)
router.get('/', findMoviesByDateAndTime)

export default router;