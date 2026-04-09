import Emprendimiento from '../models/Emprendimiento.js';
import Publicacion from '../models/Publicacion.js';

export const getEmprendimientos = async (req, res) => {
  try {
    const { category, search } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (search) filter.title = { $regex: search, $options: 'i' };

    const emprendimientos = await Emprendimiento.find(filter)
      .populate('owner', 'name username avatar')
      .sort({ createdAt: -1 });

    res.json({ success: true, count: emprendimientos.length, data: emprendimientos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getEmprendimientoById = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id)
      .populate('owner', 'name username avatar');

    if (!emprendimiento) {
      return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }

    res.json({ success: true, data: emprendimiento });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyEmprendimientos = async (req, res) => {
  try {
    const emprendimientos = await Emprendimiento.find({ owner: req.user._id })
      .sort({ createdAt: -1 });

    res.json({ success: true, count: emprendimientos.length, data: emprendimientos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createEmprendimiento = async (req, res) => {
  try {
    req.body.owner = req.user._id;
    const emprendimiento = await Emprendimiento.create(req.body);
    res.status(201).json({ success: true, data: emprendimiento });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateEmprendimiento = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id);

    if (!emprendimiento) {
      return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }

    if (emprendimiento.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para editar este emprendimiento' });
    }

    // Prevent owner field from being overwritten
    delete req.body.owner;
    delete req.body.followers;

    const updated = await Emprendimiento.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('owner', 'name username avatar');

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteEmprendimiento = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id);

    if (!emprendimiento) {
      return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }

    if (emprendimiento.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'No tienes permiso para eliminar este emprendimiento' });
    }

    await emprendimiento.deleteOne();
    res.json({ success: true, message: 'Emprendimiento eliminado' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleFollow = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id);

    if (!emprendimiento) {
      return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }

    if (emprendimiento.owner.toString() === req.user._id.toString()) {
      return res.status(400).json({ success: false, message: 'No puedes seguir tu propio emprendimiento' });
    }

    const userId = req.user._id;
    const alreadyFollowing = emprendimiento.followers.some(
      (f) => f.toString() === userId.toString()
    );

    if (alreadyFollowing) {
      emprendimiento.followers = emprendimiento.followers.filter(
        (f) => f.toString() !== userId.toString()
      );
    } else {
      emprendimiento.followers.push(userId);
    }

    await emprendimiento.save();

    res.json({
      success: true,
      following: !alreadyFollowing,
      followersCount: emprendimiento.followers.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPublicacionesByEmprendimiento = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id);
    if (!emprendimiento) {
      return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }

    const publicaciones = await Publicacion.find({ emprendimiento: req.params.id })
      .populate('author', 'name username avatar')
      .populate('commentsCount')
      .sort({ createdAt: -1 });

    res.json({ success: true, count: publicaciones.length, data: publicaciones });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleLike = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id);
    if (!emprendimiento) return res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });

    const userId = req.user._id;
    const alreadyLiked = emprendimiento.likes.some(id => id.toString() === userId.toString());

    if (alreadyLiked) {
      emprendimiento.likes = emprendimiento.likes.filter(id => id.toString() !== userId.toString());
    } else {
      emprendimiento.likes.push(userId);
    }

    await emprendimiento.save();
    res.json({ success: true, liked: !alreadyLiked, likesCount: emprendimiento.likes.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
