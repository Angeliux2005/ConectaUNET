import express from 'express';
import { getEventos, createEvento } from '../controllers/eventoController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getEventos)
  .post(protect, createEvento);

export default router;
