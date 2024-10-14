import { findExpenses, findExpenseDetails, createExpense, editExpense, deleteExpense, findExpensesByDate, findExpensesByCategory } from "../controllers/expenses.controller";
import {Router} from 'express';
const router = Router()

router.get('/', findExpenses)
router.get('/detail/:id', findExpenseDetails)
router.post('/', createExpense)
router.put('/:id', editExpense)
router.delete('/:id', deleteExpense)
router.get('/date', findExpensesByDate)
router.get('/category', findExpensesByCategory)

export default router;