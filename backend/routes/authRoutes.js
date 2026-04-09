import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  updatePassword // <-- 1. IMPORTAMOS LA NUEVA FUNCIÓN AQUÍ
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// <-- 2. CREAMOS LA RUTA PARA CAMBIAR CONTRASEÑA AQUÍ
router.put('/updatepassword', protect, updatePassword); 

export default router;