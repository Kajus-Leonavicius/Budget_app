import { authToken } from "../controllers/authCcontroller";
import express from 'express'
import { getTransactions, postTransactions, deleteTransaction } from "../controllers/TransactionController";

const router = express.Router()

router.get('/', authToken, getTransactions)
router.post('/', authToken, postTransactions)
router.delete('/:id', authToken, deleteTransaction )

export default router