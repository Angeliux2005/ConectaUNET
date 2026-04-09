import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  uploadAvatar,
  uploadEmprendimiento,
  uploadEvento,
  uploadPublicacion,
  handleUploadError
} from '../middleware/upload.js';
import User from '../models/User.js';
import Emprendimiento from '../models/Emprendimiento.js';
import Evento from '../models/Evento.js';
import Publicacion from '../models/Publicacion.js';

const router = express.Router();

// ── Helper: build public URL from saved file path ────────────────────────
const fileUrl = (req, file) =>
  `${req.protocol}://${req.get('host')}/uploads/${file.path
    .replace(/\\/g, '/')
    .split('/uploads/')[1]}`;

// ── POST /api/uploads/avatar ─────────────────────────────────────────────
router.post('/avatar', protect, (req, res, next) => {
  uploadAvatar(req, res, async (err) => {
    if (err) return handleUploadError(err, req, res, next);

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
    }

    try {
      const url = fileUrl(req, req.file);
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { avatar: url },
        { new: true }
      );

      res.json({ success: true, url, data: { avatar: user.avatar } });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
});

// ── POST /api/uploads/emprendimiento/:id ─────────────────────────────────
// Accepts: profileImage (logo) and/or coverImage (portada)
router.post('/emprendimiento/:id', protect, (req, res, next) => {
  uploadEmprendimiento(req, res, async (err) => {
    if (err) return handleUploadError(err, req, res, next);

    try {
      const emprendimiento = await Emprendimiento.findById(req.params.id);

      if (!emprendimiento) {
        return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
      }

      if (emprendimiento.owner.toString() !== req.user._id.toString()) {
        return res.status(403).json({ success: false, message: 'No tienes permiso para editar este emprendimiento' });
      }

      const updates = {};

      if (req.files?.profileImage?.[0]) {
        updates.profileImage = fileUrl(req, req.files.profileImage[0]);
      }
      if (req.files?.coverImage?.[0]) {
        updates.coverImage = fileUrl(req, req.files.coverImage[0]);
      }

      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
      }

      const updated = await Emprendimiento.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true }
      ).populate('owner', 'name username avatar');

      res.json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
});

// ── POST /api/uploads/evento/:id ─────────────────────────────────────────
router.post('/evento/:id', protect, (req, res, next) => {
  uploadEvento(req, res, async (err) => {
    if (err) return handleUploadError(err, req, res, next);

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
    }

    try {
      const evento = await Evento.findById(req.params.id);

      if (!evento) {
        return res.status(404).json({ success: false, message: 'Evento no encontrado' });
      }

      if (evento.organizer.toString() !== req.user._id.toString()) {
        return res.status(403).json({ success: false, message: 'No tienes permiso para editar este evento' });
      }

      const url = fileUrl(req, req.file);
      const updated = await Evento.findByIdAndUpdate(
        req.params.id,
        { coverImage: url },
        { new: true }
      ).populate('organizer', 'name username avatar');

      res.json({ success: true, url, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
});

// ── POST /api/uploads/publicacion/:id ───────────────────────────────────
router.post('/publicacion/:id', protect, (req, res, next) => {
  uploadPublicacion(req, res, async (err) => {
    if (err) return handleUploadError(err, req, res, next);

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
    }

    try {
      const publicacion = await Publicacion.findById(req.params.id);

      if (!publicacion) {
        return res.status(404).json({ success: false, message: 'Publicación no encontrada' });
      }

      if (publicacion.author.toString() !== req.user._id.toString()) {
        return res.status(403).json({ success: false, message: 'No tienes permiso para editar esta publicación' });
      }

      const url = fileUrl(req, req.file);
      const updated = await Publicacion.findByIdAndUpdate(
        req.params.id,
        { image: url },
        { new: true }
      ).populate('author', 'name username avatar');

      res.json({ success: true, url, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
});

// ── POST /api/uploads/emprendimiento-nuevo ──────────────────────────────
// Upload images BEFORE creating the emprendimiento (returns just the URL).
// The caller then passes the URL in the creation request body.
router.post('/emprendimiento-nuevo', protect, (req, res, next) => {
  uploadEmprendimiento(req, res, (err) => {
    if (err) return handleUploadError(err, req, res, next);

    const result = {};

    if (req.files?.profileImage?.[0]) {
      result.profileImage = fileUrl(req, req.files.profileImage[0]);
    }
    if (req.files?.coverImage?.[0]) {
      result.coverImage = fileUrl(req, req.files.coverImage[0]);
    }

    if (Object.keys(result).length === 0) {
      return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
    }

    res.json({ success: true, ...result });
  });
});

// ── POST /api/uploads/evento-nuevo ──────────────────────────────────────
// Upload cover image before creating a new evento.
router.post('/evento-nuevo', protect, (req, res, next) => {
  uploadEvento(req, res, (err) => {
    if (err) return handleUploadError(err, req, res, next);

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
    }

    const url = fileUrl(req, req.file);
    res.json({ success: true, coverImage: url });
  });
});

// ── POST /api/uploads/publicacion-nueva ────────────────────────────────
// Upload image before creating a new publicacion.
router.post('/publicacion-nueva', protect, (req, res, next) => {
  uploadPublicacion(req, res, (err) => {
    if (err) return handleUploadError(err, req, res, next);

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se recibió ningún archivo' });
    }

    const url = fileUrl(req, req.file);
    res.json({ success: true, image: url });
  });
});

export default router;
