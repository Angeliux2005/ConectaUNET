import Emprendimiento from '../models/Emprendimiento.js';

export const getEmprendimientos = async (req, res) => {
  try {
    const emprendimientos = await Emprendimiento.find({}).populate('owner', 'name email');
    res.json({ success: true, count: emprendimientos.length, data: emprendimientos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getEmprendimientoById = async (req, res) => {
  try {
    const emprendimiento = await Emprendimiento.findById(req.params.id).populate('owner', 'name email');

        if (emprendimiento) {
      res.json({ success: true, data: emprendimiento });
    } else {
      res.status(404).json({ success: false, message: 'Emprendimiento no encontrado' });
    }
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
