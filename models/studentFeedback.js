const mongoose = require('mongoose');

const StudentFeedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, 'Name cannot be lower than two characters'],
  },
  message: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    required: [true, 'Email address is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('StudentFeedback', StudentFeedbackSchema);
