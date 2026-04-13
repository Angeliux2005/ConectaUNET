import Evento from '../models/Evento.js';
import Comentario from '../models/Comentario.js';

export const getEventos = async (req, res) => {
  try {
    const { category, search } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (search) filter.title = { $regex: search, $options: 'i' };

    const eventos = await Evento.find(filter)
      .populate('organizer', 'name username avatar')
      .select('title description coverImage category date timeRange location organizer attendees savedBy')
      .sort({ date: 1 });

    res.json({ success: true, count: eventos.length, data: eventos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getEventoById = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id)
      .populate('organizer', 'name username avatar')
      .populate('attendees', 'name username avatar');

    if (!evento) {
      return res.status(404).json({ success: false, message: 'Evento no encontrado' });
    }

    res.json({ success: true, data: evento });
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

export const updateEvento = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);

    if (!evento) {
      return res.status(404).json({ success: false, message: 'Evento no encontrado' });
    }

    if (evento.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para editar este evento' });
    }

    delete req.body.organizer;
    delete req.body.attendees;

    const updated = await Evento.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('organizer', 'name username avatar');

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteEvento = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);

    if (!evento) {
      return res.status(404).json({ success: false, message: 'Evento no encontrado' });
    }

    const esDueno = evento.organizer.toString() === req.user._id.toString();
    const esAdmin = req.user.role === 'admin';

    if (!esDueno && !esAdmin) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para eliminar este evento' });
    }

    await evento.deleteOne();
    res.json({ success: true, message: 'Evento eliminado' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleAttend = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);

    if (!evento) {
      return res.status(404).json({ success: false, message: 'Evento no encontrado' });
    }

    const userId = req.user._id;
    const alreadyAttending = evento.attendees.some(
      (a) => a.toString() === userId.toString()
    );

    if (alreadyAttending) {
      evento.attendees = evento.attendees.filter(
        (a) => a.toString() !== userId.toString()
      );
    } else {
      evento.attendees.push(userId);
    }

    await evento.save();

    res.json({
      success: true,
      attending: !alreadyAttending,
      attendeesCount: evento.attendees.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMuroComentarios = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ success: false, message: 'Evento no encontrado' });
    }

    const comentarios = await Comentario.find({ evento: req.params.id })
      .populate('author', 'name username avatar')
      .sort({ createdAt: -1 });

    res.json({ success: true, count: comentarios.length, data: comentarios });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addMuroComentario = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ success: false, message: 'Evento no encontrado' });
    }

    const isAttending = evento.attendees.some(
      (a) => a.toString() === req.user._id.toString()
    );
    const isOrganizer = evento.organizer.toString() === req.user._id.toString();

    if (!isAttending && !isOrganizer) {
      return res.status(403).json({
        success: false,
        message: 'Solo los asistentes al evento pueden comentar en el muro'
      });
    }

    const comentario = await Comentario.create({
      content: req.body.content,
      author: req.user._id,
      evento: req.params.id
    });

    await comentario.populate('author', 'name username avatar');

    res.status(201).json({ success: true, data: comentario });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateMuroComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findById(req.params.comentarioId);
    if (!comentario) return res.status(404).json({ success: false, message: 'Comentario no encontrado' });

    if (comentario.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Solo puedes editar tus propios comentarios' });
    }

    comentario.content = req.body.content;
    await comentario.save();
    await comentario.populate('author', 'name username avatar');
    res.json({ success: true, data: comentario });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteMuroComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findById(req.params.comentarioId);
    if (!comentario) return res.status(404).json({ success: false, message: 'Comentario no encontrado' });

    const evento = await Evento.findById(req.params.id);
    const isOrganizer = evento && evento.organizer.toString() === req.user._id.toString();
    const isAuthor = comentario.author.toString() === req.user._id.toString();

    if (!isAuthor && !isOrganizer) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para eliminar este comentario' });
    }

    await comentario.deleteOne();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleSave = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) return res.status(404).json({ success: false, message: 'Evento no encontrado' });

    const userId = req.user._id;
    const alreadySaved = evento.savedBy.some(id => id.toString() === userId.toString());

    if (alreadySaved) {
      evento.savedBy = evento.savedBy.filter(id => id.toString() !== userId.toString());
    } else {
      evento.savedBy.push(userId);
    }

    await evento.save();
    res.json({ success: true, saved: !alreadySaved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getRelatedEventos = async (req, res) => {
  try {
    const { exclude } = req.query;
    const filter = exclude ? { _id: { $ne: exclude } } : {};
    const eventos = await Evento.aggregate([
      { $match: filter },
      { $sample: { size: 3 } }
    ]);
    // populate organizer manually after aggregate
    await Evento.populate(eventos, { path: 'organizer', select: 'name username avatar' });
    res.json({ success: true, data: eventos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
