import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Evento from '../models/Evento.js';
import Emprendimiento from '../models/Emprendimiento.js';
import Publicacion from '../models/Publicacion.js';
import Comentario from '../models/Comentario.js';

dotenv.config();

const seed = async () => {
  await connectDB();

  // Limpiar datos de corridas anteriores (solo usuarios seed)
  const seedUsernames = ['mariaseed', 'carlosseed', 'anaseed', 'pedroseed'];
  const oldSeedUsers = await User.find({ username: { $in: seedUsernames } }).select('_id');
  const oldSeedIds = oldSeedUsers.map(u => u._id);

  if (oldSeedIds.length > 0) {
    const oldEmps = await Emprendimiento.find({ owner: { $in: oldSeedIds } }).select('_id');
    const oldEmpIds = oldEmps.map(e => e._id);
    await Comentario.deleteMany({ publicacion: { $in: await Publicacion.find({ emprendimiento: { $in: oldEmpIds } }).distinct('_id') } });
    await Publicacion.deleteMany({ emprendimiento: { $in: oldEmpIds } });
    await Emprendimiento.deleteMany({ owner: { $in: oldSeedIds } });
    await Evento.deleteMany({ organizer: { $in: oldSeedIds } });
  }
  await User.deleteMany({ username: { $in: seedUsernames } });

  const [u1, u2, u3, u4] = await User.create([
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
    {
      username: 'anaseed',
      email: 'ana.lopez@unet.edu.ve',
      name: 'Ana Lopez',
      password: 'asd123',
    },
    {
      username: 'pedroseed',
      email: 'pedro.ramirez@unet.edu.ve',
      name: 'Pedro Ramirez',
      password: 'asd123',
    },
  ]);

  console.log(`Usuario 1: ${u1.username} (${u1._id})`);
  console.log(`Usuario 2: ${u2.username} (${u2._id})`);
  console.log(`Usuario 3: ${u3.username} (${u3._id})`);
  console.log(`Usuario 4: ${u4.username} (${u4._id})`);

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

  const emprendimientosConSeguidores = emprendimientos.map(emp => ({
    ...emp,
    followers: emp.owner === u1._id ? [u2._id, u3._id, u4._id] : [u1._id, u3._id, u4._id]
  }));

  const emps = await Emprendimiento.insertMany(emprendimientosConSeguidores);
  console.log('✓ 10 emprendimientos insertados con seguidores');

  await Evento.insertMany(eventos);
  console.log('✓ 10 eventos insertados');

  // ── Publicaciones (3 por emprendimiento) ────────────────────────────────────
  const [
    arquiPasteles, techPrint, cafeteria, creativaUNET, bikeRide,
    plantasUNET, apuntesExpres, fotoEstudio, repasos, sportGear
  ] = emps;

  const publicaciones = [
    // ArquiPasteles
    { title: '¡Nuevos sabores de temporada!', content: 'Esta semana estrenamos pastel de maracuyá y de guanábana. Pásate por el Hall del Bloque B y pruébalos antes de que se agoten.', image: img(292), emprendimiento: arquiPasteles._id, author: u1._id },
    { title: 'Pedidos para el día de las madres', content: 'Aceptamos pedidos personalizados con diseño arquitectónico. ¡Escríbenos por WhatsApp con anticipación!', image: img(431), emprendimiento: arquiPasteles._id, author: u1._id },
    { title: 'Gracias por su apoyo', content: 'Cerramos el mes con más de 50 pasteles vendidos. Gracias a toda la comunidad UNET por confiar en nosotros.', image: img(453), emprendimiento: arquiPasteles._id, author: u1._id },

    // TechPrint UNET
    { title: 'Impresión 3D en menos de 24 horas', content: 'Trae tu archivo STL y te lo imprimimos en PLA o PETG. Ideal para prototipos de final de semestre.', image: img(48), emprendimiento: techPrint._id, author: u1._id },
    { title: 'Grabado láser disponible', content: 'Personalizamos llaveros, portadas de cuadernos y placas. Precios especiales para estudiantes UNET.', image: img(119), emprendimiento: techPrint._id, author: u1._id },
    { title: 'Nueva filament: carbono y madera', content: 'Ya tenemos filamento de fibra de carbono y efecto madera. Perfectos para maquetas y proyectos de diseño industrial.', image: img(430), emprendimiento: techPrint._id, author: u1._id },

    // Cafetería El Rincón
    { title: 'Menú de esta semana', content: 'Lunes: pabellón. Martes: pollo guisado. Miércoles: pasta bolognesa. Jueves: carne mechada. Viernes: especial del chef.', image: img(102), emprendimiento: cafeteria._id, author: u1._id },
    { title: 'Desayunos desde las 7 AM', content: 'Arepas, cachapas, tequeños y jugos naturales te esperan cada mañana. ¡Empieza el día con energía!', image: img(493), emprendimiento: cafeteria._id, author: u1._id },
    { title: 'Promoción del viernes', content: 'Todos los viernes almuerzo + refresco por precio especial. Solo en El Rincón, planta baja del Bloque A.', image: img(429), emprendimiento: cafeteria._id, author: u1._id },

    // Diseños CreativaUNET
    { title: 'Identidad de marca completa', content: 'Logo, paleta de colores, tipografía y manual de uso. Ideal para emprendimientos estudiantiles que quieren verse profesionales.', image: img(156), emprendimiento: creativaUNET._id, author: u1._id },
    { title: 'Diseño de volantes y afiches', content: 'Material publicitario para tus eventos, clases de repaso o ventas. Entrega digital en 48 horas.', image: img(338), emprendimiento: creativaUNET._id, author: u1._id },
    { title: 'Portafolio 2026', content: 'Mira nuestros últimos trabajos en Instagram @creativaunet. Cada diseño cuenta una historia.', image: img(396), emprendimiento: creativaUNET._id, author: u1._id },

    // BikeRide Express
    { title: 'Entrega en todo el campus', content: 'Llevamos documentos, encargos y hasta comida dentro del campus. Tiempo promedio de entrega: 15 minutos.', image: img(213), emprendimiento: bikeRide._id, author: u1._id },
    { title: 'Ahora también fuera del campus', content: 'Extendimos nuestro rango a las urbanizaciones aledañas. Cotiza tu envío por WhatsApp.', image: img(504), emprendimiento: bikeRide._id, author: u1._id },
    { title: 'Flota renovada', content: 'Incorporamos dos bicicletas nuevas a nuestra flota. Más rapidez y confiabilidad para tus entregas.', image: img(374), emprendimiento: bikeRide._id, author: u1._id },

    // PlantasUNET
    { title: 'Suculentas de temporada', content: 'Nuevas variedades de suculentas y cactus disponibles. Perfectas para decorar tu cuarto o escritorio de estudio.', image: img(145), emprendimiento: plantasUNET._id, author: u2._id },
    { title: 'Macetas pintadas a mano', content: 'Cada maceta es única. Diseños geométricos, florales y personalizados. ¡Pídela con tu nombre!', image: img(399), emprendimiento: plantasUNET._id, author: u2._id },
    { title: 'Taller de terrarios este viernes', content: 'Aprende a armar tu propio terrario con plantas naturales. Cupos limitados, inscríbete por Instagram @plantasunet.', image: img(360), emprendimiento: plantasUNET._id, author: u2._id },

    // ApuntesExprés
    { title: 'Guías de Cálculo I disponibles', content: 'Resúmenes de todos los temas con ejercicios resueltos. Descarga instantánea por solo 1$.', image: img(20), emprendimiento: apuntesExpres._id, author: u2._id },
    { title: 'Nuevos apuntes: Física II', content: 'Acaba de subirse el compendio de Electromagnetismo con más de 30 ejercicios resueltos paso a paso.', image: img(317), emprendimiento: apuntesExpres._id, author: u2._id },
    { title: 'Pack completo de Ingeniería Básica', content: 'Cálculo I y II, Física I y II, Química General. Todo por un precio especial de temporada.', image: img(459), emprendimiento: apuntesExpres._id, author: u2._id },

    // FotoEstudio Campus
    { title: 'Sesiones de portafolio universitario', content: 'Fotos profesionales para tu perfil de LinkedIn y portafolio académico. Fondo blanco o locación en campus.', image: img(64), emprendimiento: fotoEstudio._id, author: u2._id },
    { title: 'Fotografía para eventos UNET', content: 'Cubrimos tu evento: talleres, graduaciones, ferias. Entrega de fotos editadas en menos de 48 horas.', image: img(188), emprendimiento: fotoEstudio._id, author: u2._id },
    { title: 'Mini sesión de carnet estudiantil', content: 'Fotos de carnet con fondo azul o blanco, listas en el momento. Lunes y miércoles con cita previa.', image: img(375), emprendimiento: fotoEstudio._id, author: u2._id },

    // RepasosIngeniería
    { title: 'Clases de Cálculo este sábado', content: 'Repaso de integrales y series. Trae tus dudas y ejercicios del parcial. Aula 204, Bloque E.', image: img(279), emprendimiento: repasos._id, author: u2._id },
    { title: 'Tutorías personalizadas', content: '¿Necesitas apoyo individual? Ofrecemos tutorías de 1 hora entre semana. Contáctanos por WhatsApp.', image: img(376), emprendimiento: repasos._id, author: u2._id },
    { title: 'Resultados de nuestros estudiantes', content: 'El 80% de los estudiantes que asistieron a nuestros repasos aprobaron el último parcial. ¡Únete al grupo!', image: img(405), emprendimiento: repasos._id, author: u2._id },

    // SportGear UNET
    { title: 'Alquiler de balones y redes', content: 'Balones de fútbol, voleibol y básquet disponibles por horas. Presenta tu carnet estudiantil.', image: img(358), emprendimiento: sportGear._id, author: u2._id },
    { title: 'Venta de implementos deportivos', content: 'Guantes, rodilleras, tobilleras y más. Precios por debajo del mercado para la comunidad UNET.', image: img(452), emprendimiento: sportGear._id, author: u2._id },
    { title: 'Torneos interfacultad: equipos inscribirse', content: 'Coordinamos el torneo de fútbol sala de mayo. Inscribe a tu equipo antes del 30 de abril.', image: img(422), emprendimiento: sportGear._id, author: u2._id },
  ];

  const pubsInsertadas = await Publicacion.insertMany(publicaciones);
  console.log('✓ 30 publicaciones insertadas (3 por emprendimiento)');

  // ── Comentarios ─────────────────────────────────────────────────────────────
  const comentarios = pubsInsertadas.map((pub) => {
    return [
      { content: '¡Se ve genial! ¿Qué precio tienen? Saludos.', author: u3._id, publicacion: pub._id, likes: [u1._id] },
      { content: 'Excelente calidad. Totalmente recomendado para la comunidad.', author: u4._id, publicacion: pub._id, likes: [] }
    ];
  }).flat();

  await Comentario.insertMany(comentarios);
  console.log('✓ 60 comentarios insertados (2 por publicación)');

  await mongoose.disconnect();
  console.log('Seed completado.');
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
