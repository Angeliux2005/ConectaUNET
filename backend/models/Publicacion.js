import mongoose from 'mongoose';

const publicacionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the post'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Please add content text']
  },
  image: {
    type: String,
    default: ''
  },
  likesCount: {
    type: Number,
    default: 0
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  emprendimiento: {
    type: mongoose.Schema.ObjectId,
    ref: 'Emprendimiento',
    required: true
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);
export default Publicacion;
