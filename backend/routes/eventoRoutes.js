import express from 'express';
import {
  getEventos,
  getEventoById,
  createEvento,
  updateEvento,
  deleteEvento,
  toggleAttend,
  getMuroComentarios,
  addMuroComentario,
  updateMuroComentario,
  deleteMuroComentario
} from '../controllers/eventoController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getEventos)
  .post(protect, createEvento);

router.route('/:id')
  .get(getEventoById)
  .put(protect, updateEvento)
  .delete(protect, deleteEvento);

router.post('/:id/attend', protect, toggleAttend);

router.route('/:id/muro')
  .get(getMuroComentarios)
  .post(protect, addMuroComentario);

router.route('/:id/muro/:comentarioId')
  .put(protect, updateMuroComentario)
  .delete(protect, deleteMuroComentario);

export default router;
