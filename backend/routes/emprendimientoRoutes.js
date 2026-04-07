import express from 'express';
import { getEmprendimientos, getEmprendimientoById, createEmprendimiento } from '../controllers/emprendimientoController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getEmprendimientos)
  .post(protect, createEmprendimiento);

router.route('/:id')
  .get(getEmprendimientoById);

export default router;
