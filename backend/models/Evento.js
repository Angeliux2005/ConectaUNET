import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the event'],
    trim: true,
    maxlength: [120, 'Title can not exceed 120 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add an event category']
  },
  description: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    required: [true, 'Please add an event date']
  },
  timeRange: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  coverImage: {
    type: String,
    default: ''
  },
  attendees: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  savedBy: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  ],
  organizer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

eventoSchema.virtual('attendeesCount').get(function () {
  return this.attendees.length;
});

eventoSchema.set('toJSON', { virtuals: true });
eventoSchema.set('toObject', { virtuals: true });

const Evento = mongoose.model('Evento', eventoSchema);
export default Evento;
