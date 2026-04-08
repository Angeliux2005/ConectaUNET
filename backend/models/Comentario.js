import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please add a comment'],
    trim: true,
    maxlength: [500, 'Comment can not exceed 500 characters']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  // One of these must be set
  publicacion: {
    type: mongoose.Schema.ObjectId,
    ref: 'Publicacion',
    default: null
  },
  evento: {
    type: mongoose.Schema.ObjectId,
    ref: 'Evento',
    default: null
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

comentarioSchema.virtual('likesCount').get(function () {
  return this.likes.length;
});

comentarioSchema.set('toJSON', { virtuals: true });
comentarioSchema.set('toObject', { virtuals: true });

const Comentario = mongoose.model('Comentario', comentarioSchema);
export default Comentario;
