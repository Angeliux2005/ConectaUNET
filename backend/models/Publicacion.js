import mongoose from 'mongoose';

const publicacionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the post'],
    trim: true
  },
  content: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
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

publicacionSchema.virtual('likesCount').get(function () {
  return (this.likes || []).length;
});

publicacionSchema.virtual('commentsCount', {
  ref: 'Comentario',
  localField: '_id',
  foreignField: 'publicacion',
  count: true
});

publicacionSchema.set('toJSON', { virtuals: true });
publicacionSchema.set('toObject', { virtuals: true });

const Publicacion = mongoose.model('Publicacion', publicacionSchema);
export default Publicacion;
