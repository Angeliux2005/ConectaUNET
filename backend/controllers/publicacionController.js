import Publicacion from '../models/Publicacion.js';
import Comentario from '../models/Comentario.js';
import Emprendimiento from '../models/Emprendimiento.js';

export const createPublicacion = async (req, res) => {
  try {
    const { emprendimientoId } = req.params;

    const emprendimiento = await Emprendimiento.findById(emprendimientoId);
    if (!emprendimiento) {
      return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }

    if (emprendimiento.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Solo el dueño del emprendimiento puede publicar'
      });
    }

    const publicacion = await Publicacion.create({
      ...req.body,
      emprendimiento: emprendimientoId,
      author: req.user._id
    });

    await publicacion.populate('author', 'name username avatar');

    res.status(201).json({ success: true, data: publicacion });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getLikedPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicacion.find({ likes: req.user._id })
      .populate('author', 'name username avatar')
      .populate('emprendimiento', 'title profileImage')
      .sort({ createdAt: -1 });
    res.json({ success: true, data: publicaciones });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPublicacionById = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id)
      .populate('author', 'name username avatar')
      .populate('emprendimiento', 'title profileImage');

    if (!publicacion) {
      return res.status(404).json({ success: false, message: 'Publicacion no encontrada' });
    }

    res.json({ success: true, data: publicacion });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updatePublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    if (!publicacion) return res.status(404).json({ success: false, message: 'Publicacion no encontrada' });

    if (publicacion.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para editar esta publicacion' });
    }

    const { title, content } = req.body;
    if (title !== undefined) publicacion.title = title;
    if (content !== undefined) publicacion.content = content;
    await publicacion.save();
    await publicacion.populate('author', 'name username avatar');
    await publicacion.populate('emprendimiento', 'title profileImage');

    res.json({ success: true, data: publicacion });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deletePublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id);

    if (!publicacion) {
      return res.status(404).json({ success: false, message: 'Publicacion no encontrada' });
    }

    if (publicacion.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para eliminar esta publicacion' });
    }

    await publicacion.deleteOne();
    res.json({ success: true, message: 'Publicacion eliminada' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleLike = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id);

    if (!publicacion) {
      return res.status(404).json({ success: false, message: 'Publicacion no encontrada' });
    }

    const userId = req.user._id;
    const alreadyLiked = publicacion.likes.some(
      (l) => l.toString() === userId.toString()
    );

    if (alreadyLiked) {
      publicacion.likes = publicacion.likes.filter(
        (l) => l.toString() !== userId.toString()
      );
    } else {
      publicacion.likes.push(userId);
    }

    await publicacion.save();

    res.json({
      success: true,
      liked: !alreadyLiked,
      likesCount: publicacion.likes.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getComentarios = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    if (!publicacion) {
      return res.status(404).json({ success: false, message: 'Publicacion no encontrada' });
    }

    const comentarios = await Comentario.find({ publicacion: req.params.id })
      .populate('author', 'name username avatar')
      .sort({ createdAt: -1 });

    res.json({ success: true, count: comentarios.length, data: comentarios });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addComentario = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    if (!publicacion) {
      return res.status(404).json({ success: false, message: 'Publicacion no encontrada' });
    }

    const comentario = await Comentario.create({
      content: req.body.content,
      author: req.user._id,
      publicacion: req.params.id
    });

    await comentario.populate('author', 'name username avatar');

    res.status(201).json({ success: true, data: comentario });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
