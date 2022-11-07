const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
  instituteName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, 'Name cannot be lower than two characters'],
    required: true,
  },
  fieldOfStudy: {
    type: String,
    trim: true,
    maxlength: 200,
    required: true,
  },
  grade: {
    type: Number,
  },
  passoutYear: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Education', EducationSchema);
