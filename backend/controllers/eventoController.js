import Evento from '../models/Evento.js';

export const getEventos = async (req, res) => {
  try {
    const eventos = await Evento.find({}).populate('organizer', 'name email');
    res.json({ success: true, count: eventos.length, data: eventos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createEvento = async (req, res) => {
  try {
    req.body.organizer = req.user._id;

    const evento = await Evento.create(req.body);
    res.status(201).json({ success: true, data: evento });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
