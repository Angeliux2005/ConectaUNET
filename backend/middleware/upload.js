import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base uploads directory (backend/uploads/)
const UPLOADS_BASE = path.join(__dirname, '..', 'uploads');

// Ensure subdirectories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDir(path.join(UPLOADS_BASE, 'avatars'));
ensureDir(path.join(UPLOADS_BASE, 'emprendimientos'));
ensureDir(path.join(UPLOADS_BASE, 'eventos'));
ensureDir(path.join(UPLOADS_BASE, 'publicaciones'));

// ── Storage factory ─────────────────────────────────────────────────────────
const createStorage = (subfolder) =>
  multer.diskStorage({
    destination: (_req, _file, cb) => {
      const dest = path.join(UPLOADS_BASE, subfolder);
      ensureDir(dest);
      cb(null, dest);
    },
    filename: (_req, file, cb) => {
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const ext = path.extname(file.originalname).toLowerCase();
      cb(null, `${unique}${ext}`);
    }
  });

// ── File filter (images only) ─────────────────────────────────────────────
const imageFilter = (_req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp|svg\+xml/;
  const mimetype = allowed.test(file.mimetype);
  const extname = allowed.test(path.extname(file.originalname).toLowerCase().replace('.', ''));

  if (mimetype || extname) {
    return cb(null, true);
  }
  cb(new Error('Solo se permiten imágenes (JPEG, PNG, GIF, WebP, SVG)'));
};

// ── Size limit: 5 MB ─────────────────────────────────────────────────────
const LIMIT = { fileSize: 5 * 1024 * 1024 };

// ── Exported upload instances ─────────────────────────────────────────────

/** Single avatar upload  →  field name: "avatar" */
export const uploadAvatar = multer({
  storage: createStorage('avatars'),
  fileFilter: imageFilter,
  limits: LIMIT
}).single('avatar');

/** Emprendimiento images  →  fields: "profileImage", "coverImage" */
export const uploadEmprendimiento = multer({
  storage: createStorage('emprendimientos'),
  fileFilter: imageFilter,
  limits: LIMIT
}).fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'coverImage',   maxCount: 1 }
]);

/** Single evento cover  →  field name: "coverImage" */
export const uploadEvento = multer({
  storage: createStorage('eventos'),
  fileFilter: imageFilter,
  limits: LIMIT
}).single('coverImage');

/** Single publicacion image  →  field name: "image" */
export const uploadPublicacion = multer({
  storage: createStorage('publicaciones'),
  fileFilter: imageFilter,
  limits: LIMIT
}).single('image');

// ── Error handler middleware ──────────────────────────────────────────────
export const handleUploadError = (err, _req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, message: 'El archivo supera el límite de 5 MB' });
    }
    return res.status(400).json({ success: false, message: err.message });
  }
  if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
};
