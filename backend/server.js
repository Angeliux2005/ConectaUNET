import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import emprendimientoRoutes from './routes/emprendimientoRoutes.js';
import eventoRoutes from './routes/eventoRoutes.js';
import publicacionRoutes from './routes/publicacionRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running normally' });
});

app.use('/api/auth', authRoutes);
app.use('/api/emprendimientos', emprendimientoRoutes);
app.use('/api/eventos', eventoRoutes);
app.use('/api/publicaciones', publicacionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
