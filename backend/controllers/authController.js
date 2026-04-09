import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

const nameFromEmail = (email) => {
  const local = email.split('@')[0]; // e.g. "nombre.apellido"
  return local
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
      const field = userExists.email === email ? 'correo' : 'nombre de usuario';
      return res.status(400).json({ success: false, message: `El ${field} ya está en uso` });
    }

    const name = nameFromEmail(email);

    const user = await User.create({ name, username, email, password });

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        token: generateToken(user._id)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({ success: false, message: 'Por favor ingresa usuario/correo y contraseña' });
    }

    // Allow login by email or username
    const user = await User.findOne({
      $or: [{ email: login }, { username: login.toLowerCase() }]
    }).select('+password');

    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          role: user.role,
          token: generateToken(user._id)
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Correo/usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          career: user.career,
          identityCard: user.identityCard,
          role: user.role
        }
      });
    } else {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    const { name, career, identityCard, avatar } = req.body;

    if (name) user.name = name;
    if (career) user.career = career;
    if (identityCard) user.identityCard = identityCard;
    if (avatar !== undefined) user.avatar = avatar;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updated = await user.save();

    res.json({
      success: true,
      data: {
        _id: updated._id,
        name: updated.name,
        username: updated.username,
        email: updated.email,
        avatar: updated.avatar,
        career: updated.career,
        identityCard: updated.identityCard,
        role: updated.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
