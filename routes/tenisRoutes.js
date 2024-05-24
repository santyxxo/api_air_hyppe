import express from 'express';
import { getAllTenis, addTenis, updateTenis, deleteTenis, getTenis } from '../controllers/tenisControllers.js';

const router = express.Router();

router.get('/', getAllTenis);
router.get('/:id',getTenis)
router.post('/', addTenis);
router.put('/:id', updateTenis);
router.delete('/:id', deleteTenis);

export default router;
