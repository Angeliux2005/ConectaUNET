import express from 'express';
import {
  getLikedPublicaciones,
  getPublicacionById,
  updatePublicacion,
  deletePublicacion,
  toggleLike,
  getComentarios,
  addComentario
} from '../controllers/publicacionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/liked', protect, getLikedPublicaciones);

router.route('/:id')
  .get(getPublicacionById)
  .put(protect, updatePublicacion)
  .delete(protect, deletePublicacion);

router.post('/:id/like', protect, toggleLike);

router.route('/:id/comentarios')
  .get(getComentarios)
  .post(protect, addComentario);

export default router;
