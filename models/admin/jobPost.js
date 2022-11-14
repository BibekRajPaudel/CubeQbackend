const mongoose = require('mongoose');

const JobPostSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
  },
  jobDescription: {
    type: String,
  },
  jobRequirements: {
    type: [String],
  },
});

module.exports = mongoose.model('JobPost', JobPostSchema);
