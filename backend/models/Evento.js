import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title mapping the event'],
    trim: true,
    maxlength: [120, 'Title can not exceed 120 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add an event type/category (e.g., STARTUPS, EDUCACION)']
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Please add an event date']
  },
  timeRange: {
    type: String,
    default: '8:00 AM - 12:00 PM'
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  coverImage: {
    type: String,
    default: 'no-event-image.jpg'
  },
  attendeesCount: {
    type: Number,
    default: 0
  },
  organizerName: {
    type: String
  },
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

const Evento = mongoose.model('Evento', eventoSchema);
export default Evento;
