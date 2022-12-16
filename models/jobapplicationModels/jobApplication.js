const mongoose = require('mongoose');

const JobApplicationSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  position:{
    type:String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  phoneNumber: {
    type: String,
  },
  cv: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  links: {
    type: String,
  },
  reasonToJoinCubeQ: {
    type: String,
  },
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
