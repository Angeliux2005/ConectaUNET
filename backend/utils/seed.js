import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Evento from '../models/Evento.js';
import Emprendimiento from '../models/Emprendimiento.js';

dotenv.config();

const seed = async () => {
  await connectDB();

  // Limpiar datos de corridas anteriores
  await User.deleteMany({ username: { $in: ['mariaseed', 'carlosseed'] } });
  await Emprendimiento.deleteMany({});
  await Evento.deleteMany({});

  const [u1, u2] = await User.create([
    {
      username: 'mariaseed',
      email: 'maria.gonzalez@unet.edu.ve',
      name: 'Maria Gonzalez',
      password: 'asd123',
    },
    {
      username: 'carlosseed',
      email: 'carlos.perez@unet.edu.ve',
      name: 'Carlos Perez',
      password: 'asd123',
    },
  ]);

  console.log(`Usuario 1: ${u1.username} (${u1._id})`);
  console.log(`Usuario 2: ${u2.username} (${u2._id})`);

  const img = (id, w = 600, h = 400) => `https://picsum.photos/id/${id}/${w}/${h}`;

  // ── Emprendimientos ──────────────────────────────────────────────────────────
  const emprendimientos = [
    // u1 (5)
    {
      title: 'ArquiPasteles',
      category: 'Comida',
      description: 'Pasteles artesanales elaborados por estudiantes de arquitectura.',
      location: 'Hall del Bloque B',
      schedule: 'Lunes a Viernes 8:00 AM – 6:00 PM',
      socialLinks: { whatsapp: '+58 414-1234567', instagram: '@arquipasteles', email: 'arquipasteles@gmail.com' },
      profileImage: img(292, 200, 200),
      coverImage: img(431),
      owner: u1._id,
    },
    {
      title: 'TechPrint UNET',
      category: 'Tecnología',
      description: 'Servicio de impresión 3D y grabado láser para proyectos universitarios.',
      location: 'Laboratorio de Electrónica, Bloque F',
      schedule: 'Martes y Jueves 1:00 PM – 5:00 PM',
      socialLinks: { instagram: '@techprintunet', email: 'techprintunet@gmail.com' },
      profileImage: img(48, 200, 200),
      coverImage: img(119),
      owner: u1._id,
    },
    {
      title: 'Cafetería El Rincón',
      category: 'Comida',
      description: 'Desayunos, almuerzos y meriendas caseras a precios de estudiante.',
      location: 'Planta baja, Bloque A',
      schedule: 'Lunes a Viernes 7:00 AM – 3:00 PM',
      socialLinks: { whatsapp: '+58 424-9876543' },
      profileImage: img(102, 200, 200),
      coverImage: img(493),
      owner: u1._id,
    },
    {
      title: 'Diseños CreativaUNET',
      category: 'Arte y Diseño',
      description: 'Diseño gráfico, identidad de marca y material publicitario estudiantil.',
      location: 'Online / Entrega en campus',
      schedule: 'Pedidos por Instagram',
      socialLinks: { instagram: '@creativaunet', email: 'creativaunet@gmail.com' },
      profileImage: img(156, 200, 200),
      coverImage: img(338),
      owner: u1._id,
    },
    {
      title: 'BikeRide Express',
      category: 'Servicios',
      description: 'Servicio de mensajería en bicicleta dentro del campus y zonas aledañas.',
      location: 'Portería principal UNET',
      schedule: 'Lunes a Sábado 8:00 AM – 7:00 PM',
      socialLinks: { whatsapp: '+58 416-5554433' },
      profileImage: img(213, 200, 200),
      coverImage: img(504),
      owner: u1._id,
    },
    // u2 (5)
    {
      title: 'PlantasUNET',
      category: 'Naturaleza',
      description: 'Venta de plantas ornamentales, suculentas y macetas decoradas a mano.',
      location: 'Pasillo del Bloque C',
      schedule: 'Miércoles y Viernes 10:00 AM – 2:00 PM',
      socialLinks: { instagram: '@plantasunet', whatsapp: '+58 412-3334455' },
      profileImage: img(145, 200, 200),
      coverImage: img(399),
      owner: u2._id,
    },
    {
      title: 'ApuntesExprés',
      category: 'Educación',
      description: 'Venta de apuntes digitales, resúmenes y guías por materia.',
      location: 'Online',
      schedule: 'Disponible 24/7 en línea',
      socialLinks: { instagram: '@apuntesexpres', email: 'apuntesexpres@gmail.com' },
      profileImage: img(20, 200, 200),
      coverImage: img(317),
      owner: u2._id,
    },
    {
      title: 'FotoEstudio Campus',
      category: 'Arte y Diseño',
      description: 'Sesiones fotográficas para carnet, portafolio y eventos estudiantiles.',
      location: 'Sala de reuniones, Bloque D',
      schedule: 'Con cita previa',
      socialLinks: { instagram: '@fotoestudiounet', whatsapp: '+58 426-7778899' },
      profileImage: img(64, 200, 200),
      coverImage: img(188),
      owner: u2._id,
    },
    {
      title: 'RepasosIngeniería',
      category: 'Educación',
      description: 'Clases de repaso y tutorías para materias de ingeniería.',
      location: 'Aula 204, Bloque E',
      schedule: 'Sábados 9:00 AM – 1:00 PM',
      socialLinks: { whatsapp: '+58 418-1122334' },
      profileImage: img(279, 200, 200),
      coverImage: img(376),
      owner: u2._id,
    },
    {
      title: 'SportGear UNET',
      category: 'Deportes',
      description: 'Alquiler y venta de implementos deportivos para estudiantes.',
      location: 'Cancha principal UNET',
      schedule: 'Lunes a Viernes 3:00 PM – 7:00 PM',
      socialLinks: { instagram: '@sportgearunet', whatsapp: '+58 414-9988776' },
      profileImage: img(358, 200, 200),
      coverImage: img(452),
      owner: u2._id,
    },
  ];

  // ── Eventos ──────────────────────────────────────────────────────────────────
  const eventos = [
    // u1 (5)
    {
      title: 'Hackathon UNET 2026',
      category: 'Tecnología',
      description: 'Competencia de 24 horas para desarrollar soluciones tecnológicas innovadoras.',
      date: new Date('2026-05-10'),
      timeRange: '9:00 AM – 9:00 AM (siguiente día)',
      location: 'Laboratorio de Computación, Bloque F',
      coverImage: img(160),
      organizer: u1._id,
    },
    {
      title: 'Feria de Emprendimiento',
      category: 'Negocios',
      description: 'Exposición de proyectos estudiantiles y emprendimientos locales.',
      date: new Date('2026-05-22'),
      timeRange: '10:00 AM – 6:00 PM',
      location: 'Patio Central UNET',
      coverImage: img(235),
      organizer: u1._id,
    },
    {
      title: 'Taller de Diseño UX/UI',
      category: 'Taller',
      description: 'Introducción al diseño de interfaces y experiencia de usuario.',
      date: new Date('2026-06-03'),
      timeRange: '2:00 PM – 5:00 PM',
      location: 'Sala de Conferencias, Bloque A',
      coverImage: img(3),
      organizer: u1._id,
    },
    {
      title: 'Torneo de Fútbol Interfacultad',
      category: 'Deportes',
      description: 'Torneo relámpago entre facultades. Inscripción por equipos.',
      date: new Date('2026-06-14'),
      timeRange: '8:00 AM – 6:00 PM',
      location: 'Cancha Principal UNET',
      coverImage: img(416),
      organizer: u1._id,
    },
    {
      title: 'Charla: IA en la Industria',
      category: 'Conferencia',
      description: 'Ponentes del sector tecnológico comparten sus experiencias con IA.',
      date: new Date('2026-06-20'),
      timeRange: '3:00 PM – 6:00 PM',
      location: 'Auditorio Central UNET',
      coverImage: img(0),
      organizer: u1._id,
    },
    // u2 (5)
    {
      title: 'Concierto de Primavera UNET',
      category: 'Concierto',
      description: 'Presentación anual de la orquesta y grupos musicales estudiantiles.',
      date: new Date('2026-05-15'),
      timeRange: '6:00 PM – 10:00 PM',
      location: 'Teatro Principal UNET',
      coverImage: img(412),
      organizer: u2._id,
    },
    {
      title: 'Semana Cultural UNET',
      category: 'Cultural',
      description: 'Actividades artísticas, gastronómicas y culturales durante toda la semana.',
      date: new Date('2026-05-27'),
      timeRange: '9:00 AM – 8:00 PM',
      location: 'Campus UNET',
      coverImage: img(175),
      organizer: u2._id,
    },
    {
      title: 'Taller de Fotografía Digital',
      category: 'Taller',
      description: 'Técnicas básicas de fotografía con cámara y smartphone.',
      date: new Date('2026-06-07'),
      timeRange: '10:00 AM – 1:00 PM',
      location: 'Sala de Arte, Bloque D',
      coverImage: img(306),
      organizer: u2._id,
    },
    {
      title: 'Exposición de Arte Estudiantil',
      category: 'Arte',
      description: 'Muestra de pinturas, esculturas y fotografías de estudiantes de la UNET.',
      date: new Date('2026-06-18'),
      timeRange: '11:00 AM – 7:00 PM',
      location: 'Galería UNET, Bloque B',
      coverImage: img(218),
      organizer: u2._id,
    },
    {
      title: 'Simposio de Ingeniería Sostenible',
      category: 'Conferencia',
      description: 'Debates y ponencias sobre energías renovables y construcción sostenible.',
      date: new Date('2026-07-04'),
      timeRange: '8:00 AM – 5:00 PM',
      location: 'Auditorio Central UNET',
      coverImage: img(473),
      organizer: u2._id,
    },
  ];

  await Emprendimiento.insertMany(emprendimientos);
  console.log('✓ 10 emprendimientos insertados');

  await Evento.insertMany(eventos);
  console.log('✓ 10 eventos insertados');

  await mongoose.disconnect();
  console.log('Seed completado.');
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
