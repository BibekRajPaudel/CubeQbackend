const mongoose = require('mongoose');

const ClientTestimonialSchema = mongoose.Schema({
  clientName: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  designation: {
    type: String,
  },
  testimonial: {
    type: String,
  },
});

module.exports = mongoose.model('ClientTestimonial', ClientTestimonialSchema);
