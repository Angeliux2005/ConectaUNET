import mongoose from 'mongoose';

const emprendimientoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the emprendimiento'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  description: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    required: [true, 'Please add a delivery location']
  },
  schedule: {
    type: String,
    default: ''
  },
  socialLinks: {
    whatsapp: { type: String, default: '' },
    instagram: { type: String, default: '' },
    email: { type: String, default: '' }
  },
  profileImage: {
    type: String,
    default: ''
  },
  coverImage: {
    type: String,
    default: ''
  },
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

emprendimientoSchema.virtual('followersCount').get(function () {
  return this.followers.length;
});

emprendimientoSchema.set('toJSON', { virtuals: true });
emprendimientoSchema.set('toObject', { virtuals: true });

const Emprendimiento = mongoose.model('Emprendimiento', emprendimientoSchema);
export default Emprendimiento;
