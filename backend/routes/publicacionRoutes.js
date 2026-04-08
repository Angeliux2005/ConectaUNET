import express from 'express';
import {
  getPublicacionById,
  deletePublicacion,
  toggleLike,
  getComentarios,
  addComentario
} from '../controllers/publicacionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:id')
  .get(getPublicacionById)
  .delete(protect, deletePublicacion);

router.post('/:id/like', protect, toggleLike);

router.route('/:id/comentarios')
  .get(getComentarios)
  .post(protect, addComentario);

export default router;
