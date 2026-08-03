const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  tourName: { type: String, required: true },
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  travelDate: { type: String, required: true },
  guests: { type: Number, default: 1 },
  notes: { type: String },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);