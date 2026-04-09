import express from 'express';
import {
  getEmprendimientos,
  getEmprendimientoById,
  getMyEmprendimientos,
  createEmprendimiento,
  updateEmprendimiento,
  deleteEmprendimiento,
  toggleFollow,
  toggleLike,
  getPublicacionesByEmprendimiento
} from '../controllers/emprendimientoController.js';
import {
  createPublicacion
} from '../controllers/publicacionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getEmprendimientos)
  .post(protect, createEmprendimiento);

router.get('/mine', protect, getMyEmprendimientos);

router.route('/:id')
  .get(getEmprendimientoById)
  .put(protect, updateEmprendimiento)
  .delete(protect, deleteEmprendimiento);

router.post('/:id/follow', protect, toggleFollow);
router.post('/:id/like', protect, toggleLike);

router.route('/:id/publicaciones')
  .get(getPublicacionesByEmprendimiento)
  .post(protect, createPublicacion);

export default router;
