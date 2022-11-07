const mongoose = require('mongoose');

// Schemas
const EducationSchema = require('./education');
const WorkExperienceSchema = require('./wrkExp');

const JobApplicationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, 'Name cannot be lower than two characters'],
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    minlength: [2, 'Name cannot be lower than two characters'],
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
  phone: {
    type: String,
    required: true,
  },
  education: [EducationSchema],
  workExperience: [WorkExperienceSchema],
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
