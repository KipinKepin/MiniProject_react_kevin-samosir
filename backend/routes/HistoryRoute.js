import express from "express"
import {
    getHistories,
    getHistoryById,
    createHistory,
    deleteHistory
} from "../controllers/Histories.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/generate', verifyUser, getHistories);
router.get('/generate/:id', verifyUser, getHistoryById);
router.post('/generate', verifyUser, createHistory);
router.delete('/generate/:id', verifyUser, deleteHistory);

export default router