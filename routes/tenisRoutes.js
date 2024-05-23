import express from 'express';
import { getAllTenis, addTenis, updateTenis, deleteTenis } from '../controllers/tenisController.js';

const router = express.Router();

router.get('/', getAllTenis);
router.post('/', addTenis);
router.put('/:id', updateTenis);
router.delete('/:id', deleteTenis);

export default router;
