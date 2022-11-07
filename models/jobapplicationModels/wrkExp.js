const mongoose = require('mongoose');

const WorkExperienceSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, 'Name cannot be lower than two characters'],
  },
  designation: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  currentlyWorking: {
    type: Boolean,
    required: true,
  },
  cv: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  additionalDoc: [String],
});

module.exports = mongoose.model('WorkExperience', WorkExperienceSchema);
