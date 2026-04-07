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
    required: [true, 'Please add a description']
  },
  tags: {
    type: [String],
    default: []
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  socialLinks: {
    instagram: String,
    twitter: String,
    facebook: String
  },
  coverImage: {
    type: String,
    default: 'no-image.jpg'
  },
  followersCount: {
    type: Number,
    default: 0
  },
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

const Emprendimiento = mongoose.model('Emprendimiento', emprendimientoSchema);
export default Emprendimiento;
